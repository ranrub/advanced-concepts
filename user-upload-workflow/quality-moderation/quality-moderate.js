require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload('./assets/images/image-from-tv.jpg', {
    type: 'private',
    public_id: 'image-from-tv-1',
    quality_analysis: true,
    moderation: 'manual',
    invalidate: true
  })
  .then(uploadResult => {
    console.log(uploadResult)
  })
  .catch(error => console.error(error))
