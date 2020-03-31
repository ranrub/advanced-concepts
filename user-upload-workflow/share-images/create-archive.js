require('dotenv').config()
const cloudinary = require('cloudinary').v2
exports.createArchive = function() {
  cloudinary.uploader
    .create_zip({
      tags: 'photo-share',
      resource_type: 'image'
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
}
