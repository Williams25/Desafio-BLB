require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const { cors, error } = require('./middlewares')

app.use(express.json())
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev')) // Monitora as requisições http

cors(app)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(routes)
error(app)


app.listen(process.env.PORT, () => console.log(`http://${process.env.IP}:${process.env.PORT}`))