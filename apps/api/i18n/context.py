from .core import detect_lang_from_request
from .translations import get_translation
import json
import os


def _load_settings_for_lang(lang):
    try:
        base = os.path.dirname(os.path.dirname(__file__))
        settings_path = os.path.join(base, "settings.json")
        with open(settings_path, encoding="utf8") as f:
            cfg = json.load(f)
    except Exception:
        return {}

    settings = dict(cfg.get("defaults", {}))
    legacy_top_level = {
        key: value
        for key, value in cfg.items()
        if key not in {"defaults", "locales"}
    }
    settings.update(legacy_top_level)
    localized_overrides = cfg.get("locales", {}).get(lang, {})
    settings.update(localized_overrides)
    return settings


def inject_i18n_helpers():
    lang = detect_lang_from_request()

    def t(key):
        return get_translation(lang, key)

    settings = _load_settings_for_lang(lang)

    out = {"t": t, "current_lang": lang}
    out.update(settings)
    return out
