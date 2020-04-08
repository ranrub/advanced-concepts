require('dotenv').config()
const cloudinary = require('cloudinary').v2

// Strict transformations enabled
// explicit method using eager parameter to create a transformation
// creates a disabled 'Disallowed' transform
// aleady uploaded assets require that public id and type be provided
cloudinary.uploader
  .explicit('shark', {
    type: 'upload',
    aysnc: false,
    eager: [
      {
        transformation: [
          {
            transformation:'auto-400-xform'
          },
          {
            fetch_format: 'auto',
            quality: 'auto'
          }
        ]
      }
    ]
  })
  .then(result => console.log('result', result))
  .catch(error => console.log('error', error))
