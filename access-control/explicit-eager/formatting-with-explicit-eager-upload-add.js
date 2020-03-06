require('dotenv').config()
const cloudinary = require('cloudinary').v2

// Strict transformations enabled
// explicit method using eager parameter to create a transformation
// creates a disabled 'Disallowed' transform
// aleady uploaded assets require that public id and type be provided
cloudinary.uploader.explicit('killer-whale',
  {
    type: 'upload',
    eager: [{
      fetch_format: 'webp',
      transformation: [{
        width: 300,
        height: 300,
        quality: 'auto',
        crop: 'mfit',
        invalidate: true
      }]
    }]
  })
  .then(result => console.log('result', result))
  .catch(error => console.log('error', error))
