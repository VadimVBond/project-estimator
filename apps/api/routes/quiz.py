from flask import Blueprint, jsonify

bp = Blueprint('quiz', __name__)

@bp.route('/quiz')
def get_quiz():
    return jsonify({'message': 'quiz route'})
