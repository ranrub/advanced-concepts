// asset is private w/strict transformations
// or authenticated with signed URLs
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
    type: 'private',
    public_id: data.imageId,
    context: `description=${data.description} ${
      data.sale ? ' on sale' : ''
    } | sku=${data.sku} | alt=${data.description}`,
    tags: data.category,
    background_removal: 'cloudinary_ai',
    notification_url:
      'https://webhook.site/c49e5d9e-15dd-43c0-b3c1-9e744d92cdbe',
    eager: [{ height: 200, width: 200, crop: 'thumb' }]
  })
  .then(uploadResult => {
    console.log(uploadResult)
  })
  .catch(error => console.error(error))
