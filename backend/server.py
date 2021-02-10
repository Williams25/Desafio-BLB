#!/usr/bin/env python3

import decimal
import os
import uuid

from flask import (
    Flask,
    send_from_directory,
)
from flask_cors import CORS
from flask_restful import (
    Api,
    Resource,
    abort,
    reqparse,
)
import peewee
from werkzeug.datastructures import FileStorage

from db import (
    db,
    Product,
)

app = Flask(__name__)
api = Api(app)
CORS(app)


@app.before_request
def before_request():
    db.connect()


@app.after_request
def after_request(response):
    db.close()
    return response


@app.route("/media/<path:path>")
def media(path):
    return send_from_directory("media", path)


parser = reqparse.RequestParser()
parser.add_argument(
    "name",
    required=True,
)
parser.add_argument(
    "price",
    required=True,
    type=decimal.Decimal,
)
parser.add_argument(
    "image",
    type=FileStorage,
    location="files",
)


def _get_or_404(p_id):
    try:
        return Product.get_by_id(p_id)
    except peewee.DoesNotExist:
        abort(404, message="Product {} doesn't exist".format(p_id))


def _to_json(product):
    image_url = f"media/{product.image}" if product.image else None
    return {
        "id": product.id,
        "name": product.name,
        "price": str(product.price),
        "image_url": image_url,
    }


class ProductsResource(Resource):
    """Products REST resource."""

    def get(self):
        return [_to_json(p) for p in Product.select()]

    def post(self):
        args = parser.parse_args()

        if not args.get("name"):
            abort(400, message="name is required")
        if (args.get("price") or 0) <= 0:
            abort(400, message="price needs to be higher than 0")

        p = Product(name=args["name"], price=args["price"])
        img = args.get("image")
        if img:
            if "." in img.filename:
                ext = args["image"].filename.split(".")[1]
            else:
                ext = "jpg"

            fname = f"{uuid.uuid4()}.{ext}"
            img.save(os.path.join("media", fname))
            p.image = fname

        p.save()
        return _to_json(p), 201


class ProductResource(Resource):
    """Product REST resource."""

    def get(self, product_id):
        p = _get_or_404(product_id)
        return _to_json(p)

    def delete(self, product_id):
        p = _get_or_404(product_id)
        p.delete_instance()
        return "", 204


api.add_resource(ProductsResource, "/products")
api.add_resource(ProductResource, "/products/<product_id>")


if __name__ == "__main__":
    db.create_tables([Product])
    app.run(debug=True)
