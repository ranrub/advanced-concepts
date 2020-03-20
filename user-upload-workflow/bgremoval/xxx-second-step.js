require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.uploader
  .explicit('dolphin', {
    type: 'upload',
    moderation: 'manual',
    notification_url:
      'https://webhook.site/17a3d46c-5d18-46b0-ab6c-94b12d7f645c'
  })
  .then(result => {
    console.log(JSON.stringify(result, null, 2))
  })
  .catch(error => {
    console.log(error)
  })
