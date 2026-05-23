from flask import Blueprint, jsonify

bp = Blueprint("telegram", __name__)


@bp.route("/telegram")
def get_telegram():
    return jsonify({"message": "telegram route"})
