require('dotenv').config()
const cloudinary = require('cloudinary').v2

const data = {
  sku: 's0001',
  category: 'shoes',
  description: 'Yellow Shoes',
  image: './assets/images/yellow-shoes.jpg',
  imageId: 'yellow-shoes',
  sale: true
}

cloudinary.uploader
  .upload(data.image, {
    public_id: data.imageId,
    context: `description=${data.description} ${
      data.sale ? 'on sale' : ''
    } | sku=${data.sku} | alt=${data.description}`,
    tags: data.category,
    background_removal: 'cloudinary_ai',
    notification_url:
      'https://webhook.site/17a3d46c-5d18-46b0-ab6c-94b12d7f645c',
    transformation: [{ height: 200, width: 200, crop: 'thumb' }]
  })
  .then(uploadResult => {
    console.log(JSON.stringify(uploadResult, null, 2))
  })
  .catch(error => console.error(error))
