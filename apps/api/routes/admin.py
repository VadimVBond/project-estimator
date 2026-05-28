"""Admin routes for system dashboard and management.

Adds language-aware routes under /<lang>/admin and ensures templates
receive the `lang` variable. Unsupported languages are redirected to
the default language.
"""

from flask import Blueprint, redirect, render_template, request, url_for

import config
from services.lead_service import get_leads_page, get_leads_summary
from services.pricing_service import get_pricing_rules, save_pricing_rules
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


def _parse_int(value: str | None, default: int) -> int:
    try:
        return int(float(value))
    except (TypeError, ValueError):
        return default


def _parse_number(value: str | None, default: float) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


@bp.route("/admin/pricing-settings", methods=["GET", "POST"])
@bp.route("/admin/pricing-settings/", methods=["GET", "POST"])
def admin_pricing_settings():
    return admin_pricing_settings_lang(config.DEFAULT_LANG)


@bp.route("/<lang>/admin/pricing-settings", methods=["GET", "POST"])
@bp.route("/<lang>/admin/pricing-settings/", methods=["GET", "POST"])
def admin_pricing_settings_lang(lang):
    """Language-aware pricing rules editor."""
    if lang not in config.SUPPORTED_LANGS:
        return redirect(url_for("admin.admin_pricing_settings_lang", lang=config.DEFAULT_LANG))

    saved = False
    rules = get_pricing_rules()

    if request.method == "POST":
        updated = get_pricing_rules()
        updated["currency"] = request.form.get(
            "currency", updated.get("currency", "USD")
        ).strip() or updated.get("currency", "USD")
        updated["rounding"]["increment"] = _parse_int(
            request.form.get("rounding_increment"), updated.get("rounding", {}).get("increment", 50)
        )

        if "currencyRates" not in updated or not isinstance(updated["currencyRates"], dict):
            updated["currencyRates"] = {"USD": 1, "EUR": 0.93, "UAH": 40}

        updated["currencyRates"]["USD"] = _parse_number(
            request.form.get("currencyRates[USD]"), updated["currencyRates"].get("USD", 1)
        )
        updated["currencyRates"]["EUR"] = _parse_number(
            request.form.get("currencyRates[EUR]"), updated["currencyRates"].get("EUR", 0.93)
        )
        updated["currencyRates"]["UAH"] = _parse_number(
            request.form.get("currencyRates[UAH]"), updated["currencyRates"].get("UAH", 40)
        )

        for project_id, project_data in updated.get("projectTypes", {}).items():
            project_data["basePrice"] = _parse_int(
                request.form.get(f"projectTypes[{project_id}].basePrice"),
                project_data.get("basePrice", 0),
            )

        for feature_id, feature_data in updated.get("features", {}).items():
            feature_data["amount"] = _parse_int(
                request.form.get(f"features[{feature_id}].amount"), feature_data.get("amount", 0)
            )

        for stack_id, stack_data in updated.get("stacks", {}).items():
            stack_data["multiplier"] = _parse_number(
                request.form.get(f"stacks[{stack_id}].multiplier"),
                stack_data.get("multiplier", 1.0),
            )

        for complexity_id, complexity_data in updated.get("complexities", {}).items():
            complexity_data["coefficient"] = _parse_number(
                request.form.get(f"complexities[{complexity_id}].coefficient"),
                complexity_data.get("coefficient", 1.0),
            )

        save_pricing_rules(updated)
        rules = updated
        saved = True

    return render_template(
        "admin_pricing.html",
        rules=rules,
        lang=lang,
        saved=saved,
    )


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
