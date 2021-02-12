const database = require('../models')
const { renderProducts } = require('../utils/upload')

module.exports = {
  create: async (req, res) => {
    const { name, price } = req.body
    const reqImage = req.files

    const image = reqImage.map(file => {
      return file.filename
    })

    const priceReplace = price.replace(',', '.')
    await database.Products.create({ name, price: parseFloat(priceReplace).toFixed(2), image_url: image[0] }).then(product => {
      const response = renderProducts(product)
      return res.status(201).json(response)
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  findAll: async (req, res) => {
    await database.Products.findAll({
      order: [
        ['id', 'DESC'],
      ],
    }).then(product => {
      const response = product.map(product => {
        return renderProducts(product)
      })
      return res.status(200).json(response)
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  findOne: async (req, res) => {
    const { id } = req.params
    await database.Products.findOne({
      where: { id }
    }).then(product => {
      const response = renderProducts(product)
      return res.status(200).json(response)
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  delete: async (req, res) => {
    const { id } = req.params

    await database.Products.destroy({ where: { id } }).then(product => {
      if (product === 0) return res.status(404).json({ message: 'Não encontrado' })
      return res.status(204).end()
    }).catch(err => res.status(400).json({ message: err.message }))
  },

  update: async (req, res) => {
    const { name, price, id } = req.body
    const reqImage = req.files

    const image = reqImage.map(file => {
      return file.filename
    })

    const priceReplace = price.replace(',', '.')

    await database.Products.update({ name, price: priceReplace, image_url: image[0] },
      { where: { id } }).then(async () => {

        const product = await database.Products.findOne({
          where: { id }
        })
        const response = renderProducts(product)
        return res.status(200).json(response)
      }).catch(err => res.status(400).json({ message: err.message }))
  }
}