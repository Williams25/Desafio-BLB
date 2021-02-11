const express = require('express')
const routes = express.Router()
const uploadConfig = require('../utils/upload')
const multer = require('multer')
const upload = multer(uploadConfig)

const Products = require('../controllers/ProductsController')

routes.post('/products', upload.array('image_url'), Products.create)
routes.get('/products', Products.findAll)
routes.get('/products/:id', Products.findOne)
routes.delete('/products/:id', Products.delete)
routes.put('/products', upload.array('image_url'), Products.update)

module.exports = routes