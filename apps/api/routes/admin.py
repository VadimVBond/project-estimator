from flask import Blueprint, jsonify

bp = Blueprint("admin", __name__)


@bp.route("/admin")
def admin():
    return jsonify({"message": "admin route"})
