const multer = require('multer')
const path = require('path')

module.exports = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {

      const filename = `${Date.now()}--${file.originalname.replace(' ','-')}`

      callback(null, filename)
    }
  }),

  renderImage(data) {
    return {
      id: data.id,
      name: data.name,
      price: Number(data.price).toFixed(2),
      image_url: `http://${process.env.IP}:${process.env.PORT}/uploads/${data.image_url}`
    }
  }
}