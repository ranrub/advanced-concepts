require('dotenv').config()
const cloudinary = require('cloudinary').v2

// use upload API to upload a private asset

cloudinary.uploader.upload('./assets/video/hot-tub.mp4', {
  folder: 'moderated',
  resource_type: 'video',
  type: 'authenticated',
  invalidate: true
})
  .then(uploadResult => {
    console.log(uploadResult)
  })
  .catch(error => console.error(error))
