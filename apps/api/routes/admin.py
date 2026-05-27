"""Admin routes for system dashboard and management.

Adds language-aware routes under /<lang>/admin and ensures templates
receive the `lang` variable. Unsupported languages are redirected to
the default language.
"""

from flask import Blueprint, redirect, render_template, request, url_for

import config
from services.lead_service import get_leads_page, get_leads_summary
from services.system_dashboard_service import SystemDashboard

bp = Blueprint("admin", __name__)


@bp.route("/admin")
@bp.route("/admin/")
def admin():
    """Admin main page (legacy route)."""
    return render_template("admin_index.html", lang=config.DEFAULT_LANG)


@bp.route("/<lang>/admin")
@bp.route("/<lang>/admin/")
def admin_lang(lang):
    """Language-aware admin main page."""
    if lang not in config.SUPPORTED_LANGS:
        return redirect(url_for("admin.admin_lang", lang=config.DEFAULT_LANG))
    return render_template("admin_index.html", lang=lang)


@bp.route("/admin/system")
@bp.route("/admin/system/")
def system_dashboard():
    """System dashboard with integration and component status (legacy)."""
    dashboard_data = SystemDashboard.get_dashboard_data()
    return render_template("admin_system.html", dashboard=dashboard_data, lang=config.DEFAULT_LANG)


@bp.route("/<lang>/admin/system")
@bp.route("/<lang>/admin/system/")
def system_dashboard_lang(lang):
    """Language-aware system dashboard."""
    if lang not in config.SUPPORTED_LANGS:
        return redirect(url_for("admin.system_dashboard_lang", lang=config.DEFAULT_LANG))
    dashboard_data = SystemDashboard.get_dashboard_data()
    return render_template("admin_system.html", dashboard=dashboard_data, lang=lang)


@bp.route("/admin/leads")
@bp.route("/admin/leads/")
def admin_leads():
    """Admin leads dashboard (legacy route)."""
    return admin_leads_lang(config.DEFAULT_LANG)


@bp.route("/<lang>/admin/leads")
@bp.route("/<lang>/admin/leads/")
def admin_leads_lang(lang):
    """Admin leads dashboard with filters and pagination."""
    if lang not in config.SUPPORTED_LANGS:
        return redirect(url_for("admin.admin_leads_lang", lang=config.DEFAULT_LANG))

    query = request.args.get("q", "").strip()
    status = request.args.get("status", "all")
    source = request.args.get("source", "all")
    page = request.args.get("page", "1")
    page_size = request.args.get("page_size", "15")

    try:
        page = max(int(page), 1)
    except ValueError:
        page = 1

    try:
        page_size = min(max(int(page_size), 5), 100)
    except ValueError:
        page_size = 15

    page_data = get_leads_page(
        search=query,
        status=status,
        source=source,
        page=page,
        page_size=page_size,
    )
    summary = get_leads_summary()

    return render_template(
        "admin_leads.html",
        leads=page_data["items"],
        pagination=page_data["pagination"],
        filters={
            "q": query,
            "status": status,
            "source": source,
            "page_size": page_size,
        },
        summary=summary,
        lang=lang,
    )
