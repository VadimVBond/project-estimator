from flask import Blueprint, jsonify

bp = Blueprint("leads", __name__)


@bp.route("/leads")
def get_leads():
    return jsonify({"message": "leads route"})
