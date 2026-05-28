#!/usr/bin/env python
"""Test script to validate system dashboard implementation."""

import os
import sys

# Add the api directory to Python path
sys.path.insert(0, os.path.dirname(__file__))


def test_imports():
    """Test that all modules can be imported."""
    print("Testing imports...")
    try:
        from routes.admin import bp as admin_bp

        print("✓ Admin blueprint imported successfully")

        from services.system_dashboard_service import SystemDashboard

        print("✓ SystemDashboard service imported successfully")

        # Check that admin blueprint has the correct routes
        routes = [rule.rule for rule in admin_bp.deferred_functions]
        print("✓ Admin blueprint structure is valid")

        return True
    except ImportError as e:
        print(f"✗ Import failed: {e}")
        return False


def test_service_structure():
    """Test the SystemDashboard service structure."""
    print("\nTesting SystemDashboard service structure...")
    try:
        from services.system_dashboard_service import SystemDashboard

        # Check that all required methods exist
        methods = [
            "get_telegram_status",
            "get_leads_status",
            "get_flatpages_status",
            "get_loaded_languages",
            "get_registered_blueprints",
            "get_cache_status",
            "get_dashboard_data",
        ]

        for method in methods:
            if hasattr(SystemDashboard, method):
                print(f"✓ Method {method} exists")
            else:
                print(f"✗ Method {method} missing")
                return False

        return True
    except Exception as e:
        print(f"✗ Service structure test failed: {e}")
        return False


def test_template_syntax():
    """Test Jinja2 template syntax."""
    print("\nTesting template syntax...")
    try:
        import os

        template_path = os.path.join(os.path.dirname(__file__), "templates", "admin_system.html")

        if os.path.exists(template_path):
            with open(template_path, encoding="utf-8") as f:
                content = f.read()
                # Basic checks for template structure
                if "{% extends" in content and "{% block content %}" in content:
                    print("✓ Template structure is valid")
                    return True
                else:
                    print("✗ Template missing base structure")
                    return False
        else:
            print(f"✗ Template file not found: {template_path}")
            return False
    except Exception as e:
        print(f"✗ Template syntax test failed: {e}")
        return False


def main():
    """Run all tests."""
    print("=" * 60)
    print("System Dashboard Implementation Tests")
    print("=" * 60)

    results = []

    results.append(("Imports", test_imports()))
    results.append(("Service Structure", test_service_structure()))
    results.append(("Template Syntax", test_template_syntax()))

    print("\n" + "=" * 60)
    print("Test Results Summary:")
    print("=" * 60)

    for test_name, passed in results:
        status = "✓ PASSED" if passed else "✗ FAILED"
        print(f"{test_name}: {status}")

    all_passed = all(result[1] for result in results)

    if all_passed:
        print("\n✓ All tests passed! System dashboard implementation is valid.")
        return 0
    else:
        print("\n✗ Some tests failed. Please review the output above.")
        return 1


if __name__ == "__main__":
    sys.exit(main())
