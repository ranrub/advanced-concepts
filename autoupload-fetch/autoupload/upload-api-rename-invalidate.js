require('dotenv').config()
const cloudinary = require('cloudinary').v2

// choose a image in a remote media subfolder and rename it so
// that is is located directly under remote-media

cloudinary.uploader.rename('remote-media/images/pineapple', 'remote-media/pineapple',
  { invalidate: true })
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
