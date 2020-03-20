require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.uploader
  .upload('./assets/images/dolphin.jpg', {
    public_id: 'dolphin',
    background_removal: 'cloudinary_ai',
    moderation: 'manual',
    notification_url:
      'https://webhook.site/17a3d46c-5d18-46b0-ab6c-94b12d7f645c'
  })
  .then(uploadResult => {
    console.log(JSON.stringify(uploadResult, null, 2))
  })
  .catch(error => console.error(error))
