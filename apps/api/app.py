import sys

from flask import Flask
from flask_flatpages import FlatPages
from flask_frozen import Freezer

import config
from blueprints.main.routes import main_bp
from content.loader import init_loader
from generators import register_generators
from i18n import inject_i18n_helpers, load_translations
from routes.admin import bp as admin_bp
from routes.leads import bp as leads_bp
from routes.pricing import bp as pricing_bp
from routes.quiz import bp as quiz_bp
from services.handlers import register_all_handlers
from services.lead_service import init_lead_storage

# =========================================================
# APP
# =========================================================

app = Flask(__name__)
app.config.from_object(config)
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.jinja_env.auto_reload = True

flatpages = FlatPages(app)

freezer = Freezer(
    app,
    with_static_files=True,
)


# =========================================================
# I18N
# =========================================================

load_translations()


# =========================================================
# CONTENT LOADER
# =========================================================

with app.app_context():
    init_loader(flatpages)


# =========================================================
# SERVICES
# =========================================================

register_generators(freezer)

init_lead_storage()

register_all_handlers()


# =========================================================
# BLUEPRINTS
# =========================================================

app.register_blueprint(main_bp)

app.register_blueprint(admin_bp)

app.register_blueprint(pricing_bp)

app.register_blueprint(quiz_bp)

app.register_blueprint(leads_bp)


# =========================================================
# CONTEXT PROCESSORS
# =========================================================

app.context_processor(inject_i18n_helpers)


# =========================================================
# RUN
# =========================================================

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()

    else:
        app.run(
            host="127.0.0.1",
            port=5001,
            debug=True,
        )
