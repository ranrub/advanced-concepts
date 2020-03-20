require('dotenv').config()
// require('dotenv').config({ path: './.env.backup' })

const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload('./assets/images/blurry-image.jpg', {
    public_id: 'blurry-image',
    quality_analysis: true
  })
  .then(uploadResult => {
    console.log(uploadResult)
    // try .8, .9
    if (uploadResult.quality_analysis.focus < 0.7) {
      cloudinary.uploader
        .explicit(uploadResult.public_id, {
          type: 'upload',
          moderation: 'manual',
          notification_url:
            'https://webhook.site/17a3d46c-5d18-46b0-ab6c-94b12d7f645c'
        })
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
  })

  .catch(error => console.error(error))

// 'https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
