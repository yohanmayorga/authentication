"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import bcrypt

api = Blueprint('api', __name__)


@api.route('/accounts/create', methods=['POST'])
def create_user():

    body = request.get_json()
    email = body.get("email", None)
    password = body.get("password", None)
    is_active = body.get("is_active", None)
    bpassword = bytes(password, 'utf-8')
    salt = bcrypt.gensalt(14)

    hashed_password = bcrypt.hashpw(password=bpassword, salt=salt)

    new_user = User(email=email, password=hashed_password.decode(
        'utf-8'), salt=salt, is_active=is_active)
    db.session.add(new_user)
    db.session.commit()

    return {"user": new_user.serialize()}, 200


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
