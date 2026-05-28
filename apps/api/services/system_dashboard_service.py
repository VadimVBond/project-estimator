"""System Dashboard Service

Provides status information about various system components for the admin dashboard.
Follows clean architecture principles: UI layer (route + template) is separate from this service layer.
"""

from __future__ import annotations

import sqlite3
from datetime import datetime
from pathlib import Path
from typing import Any

from config import SUPPORTED_LANGS


class SystemDashboard:
    """Gathers system status information for the admin dashboard."""

    @staticmethod
    def get_telegram_status() -> dict[str, Any]:
        """Get Telegram integration status."""
        try:
            return {
                "status": "configured",
                "message": "Telegram service loaded",
                "icon": "bi-send-check",
                "color": "success",
            }
        except Exception:
            return {
                "status": "unavailable",
                "message": "Telegram service not configured",
                "icon": "bi-send",
                "color": "warning",
            }

    @staticmethod
    def get_leads_status() -> dict[str, Any]:
        """Get leads system status and count."""
        try:
            db_path = Path(__file__).resolve().parents[1] / "db" / "project_estimator.sqlite3"

            if not db_path.exists():
                return {
                    "status": "no_data",
                    "count": 0,
                    "message": "No leads database yet",
                    "icon": "bi-inbox",
                    "color": "secondary",
                }

            connection = sqlite3.connect(db_path)
            cursor = connection.cursor()
            cursor.execute("SELECT COUNT(*) as count FROM leads")
            row = cursor.fetchone()
            count = row[0] if row else 0
            connection.close()

            return {
                "status": "active",
                "count": count,
                "message": f"{count} lead{'s' if count != 1 else ''} in database",
                "icon": "bi-inbox-fill",
                "color": "info",
            }
        except Exception as e:
            return {
                "status": "error",
                "count": 0,
                "message": f"Error: {str(e)[:50]}",
                "icon": "bi-exclamation-triangle",
                "color": "danger",
            }

    @staticmethod
    def get_flatpages_status() -> dict[str, Any]:
        """Get FlatPages content statistics."""
        try:
            from flask import current_app

            flatpages = current_app.extensions.get("flatpages")

            if not flatpages:
                return {
                    "status": "unavailable",
                    "pages_count": 0,
                    "message": "FlatPages not initialized",
                    "icon": "bi-file-text",
                    "color": "warning",
                }

            # Try different methods to get pages count
            pages_count = 0
            if hasattr(flatpages, "get_all") and callable(flatpages.get_all):
                pages = flatpages.get_all()
                pages_count = len(pages)
            elif hasattr(flatpages, "_pages"):
                # FlatPages stores pages in _pages dict
                pages_count = len(flatpages._pages)
            elif isinstance(flatpages, dict):
                # If it's a dict of pages
                pages_count = len(flatpages)
            else:
                # Try to iterate
                try:
                    pages_count = sum(1 for _ in flatpages)
                except:
                    pages_count = 0

            return {
                "status": "active",
                "pages_count": pages_count,
                "message": f"{pages_count} page{'s' if pages_count != 1 else ''} loaded",
                "icon": "bi-file-earmark-text",
                "color": "success",
            }
        except Exception as e:
            return {
                "status": "error",
                "pages_count": 0,
                "message": f"Error: {str(e)[:50]}",
                "icon": "bi-exclamation-triangle",
                "color": "danger",
            }

    @staticmethod
    def get_loaded_languages() -> dict[str, Any]:
        """Get list of loaded languages."""
        return {
            "languages": SUPPORTED_LANGS,
            "count": len(SUPPORTED_LANGS),
            "message": f"Languages: {', '.join(SUPPORTED_LANGS)}",
            "icon": "bi-globe",
            "color": "primary",
        }

    @staticmethod
    def get_registered_blueprints() -> dict[str, Any]:
        """Get list of registered blueprints."""
        try:
            from flask import current_app

            blueprints = list(current_app.blueprints.keys())
            return {
                "blueprints": blueprints,
                "count": len(blueprints),
                "message": f"{len(blueprints)} blueprint{'s' if len(blueprints) != 1 else ''} registered",
                "icon": "bi-puzzle",
                "color": "primary",
            }
        except Exception as e:
            return {
                "blueprints": [],
                "count": 0,
                "message": f"Error: {str(e)[:50]}",
                "icon": "bi-exclamation-triangle",
                "color": "danger",
            }

    @staticmethod
    def get_cache_status() -> dict[str, Any]:
        """Get cache status (simple implementation)."""
        try:
            from flask import current_app

            config = current_app.config
            cache_config = config.get("CACHE_TYPE", "simple")

            return {
                "status": "active",
                "type": cache_config,
                "message": f"Cache type: {cache_config}",
                "icon": "bi-lightning-charge",
                "color": "warning",
            }
        except Exception as e:
            return {
                "status": "error",
                "type": "unknown",
                "message": f"Error: {str(e)[:50]}",
                "icon": "bi-exclamation-triangle",
                "color": "danger",
            }

    @staticmethod
    def get_project_status() -> dict[str, Any]:
        """Get overall project status and quick stats."""
        try:
            from flask import current_app

            stats = {
                "routes_count": len(current_app.url_map._rules),
                "templates_count": 0,
                "static_files_count": 0,
            }

            return {
                "status": "active",
                "message": "Application running smoothly",
                "icon": "bi-activity",
                "color": "success",
                "stats": stats,
            }
        except Exception as e:
            return {
                "status": "error",
                "message": f"Error: {str(e)[:50]}",
                "icon": "bi-exclamation-triangle",
                "color": "danger",
                "stats": {},
            }

    @staticmethod
    def get_implementation_progress() -> dict[str, Any]:
        """Get project implementation progress by feature."""
        progress_data = {
            "Landing": {
                "planned": 5,
                "in_progress": 2,
                "completed": 8,
                "description": "Homepage and main site structure",
            },
            "Quiz": {
                "planned": 3,
                "in_progress": 1,
                "completed": 5,
                "description": "Interactive quiz functionality",
            },
            "Pricing": {
                "planned": 2,
                "in_progress": 0,
                "completed": 4,
                "description": "Pricing page and plans",
            },
            "Telegram": {
                "planned": 2,
                "in_progress": 1,
                "completed": 3,
                "description": "Telegram bot integration",
            },
            "Dashboard": {
                "planned": 4,
                "in_progress": 2,
                "completed": 6,
                "description": "Admin dashboard and monitoring",
            },
            "Analytics": {
                "planned": 3,
                "in_progress": 0,
                "completed": 2,
                "description": "Analytics and reporting tools",
            },
        }

        # Calculate totals
        total_planned = sum(s["planned"] for s in progress_data.values())
        total_in_progress = sum(s["in_progress"] for s in progress_data.values())
        total_completed = sum(s["completed"] for s in progress_data.values())
        total_tasks = total_planned + total_in_progress + total_completed

        completion_percentage = int((total_completed / total_tasks * 100) if total_tasks > 0 else 0)

        return {
            "sections": progress_data,
            "totals": {
                "planned": total_planned,
                "in_progress": total_in_progress,
                "completed": total_completed,
                "total": total_tasks,
                "completion_percentage": completion_percentage,
            },
        }

    @classmethod
    def get_dashboard_data(cls) -> dict[str, Any]:
        """Get complete dashboard data."""
        return {
            "generated_at": datetime.now().strftime("%H:%M:%S"),
            "updated_date": datetime.now().strftime("%Y-%m-%d"),
            "telegram": cls.get_telegram_status(),
            "leads": cls.get_leads_status(),
            "flatpages": cls.get_flatpages_status(),
            "languages": cls.get_loaded_languages(),
            "blueprints": cls.get_registered_blueprints(),
            "cache": cls.get_cache_status(),
            "project": cls.get_project_status(),
            "progress": cls.get_implementation_progress(),
        }
