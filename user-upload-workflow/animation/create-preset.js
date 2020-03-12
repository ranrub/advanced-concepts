require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.api
  .create_upload_preset({
    name: 'sea-life-preset',
    use_filename: true,
    unique_filename: false,
    unsigned: false,
    transformation: {
      width: 400,
      height: 400,
      gravity: 'auto',
      crop: 'fill_pad'
    },
    tags: 'sea-life',
    allowed_formats: 'jpg'
  })
  .then(uploadResult => console.log(uploadResult))
  .catch(error => console.error(error))
