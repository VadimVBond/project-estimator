from flask import Blueprint, jsonify

bp = Blueprint('pricing', __name__)

@bp.route('/pricing')
def get_pricing():
    return jsonify({'message': 'pricing route'})
