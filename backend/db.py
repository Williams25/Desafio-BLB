import peewee


db = peewee.SqliteDatabase("data.db")


class Product(peewee.Model):
    """Product model."""

    class Meta:
        database = db

    name = peewee.TextField(null=False)
    price = peewee.DecimalField(null=False, max_digits=20, decimal_places=2)
    image = peewee.TextField(null=True)
