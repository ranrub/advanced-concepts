require('dotenv').config()
// require('dotenv').config({ path: './.env.backup' })

const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload(
    'https://images.pexels.com/photos/1479706/pexels-photo-1479706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    {
      public_id: 'wine-test-manual-first',
      moderation: 'manual',
      notification_url:'https://webhook.site/5e96159b-630d-4fbe-91ed-d3f2807aedca'
    }
  )
  .then(uploadResult => {
    console.log(JSON.stringify(uploadResult, null, 2))
    cloudinary.uploader
      .explicit(uploadResult.public_id, {
        type: 'upload',
        background_removal: 'cloudinary_ai',
        notification_url:
          'https://webhook.site/5e96159b-630d-4fbe-91ed-d3f2807aedca'
      })
      .then(result => console.log(result))
      .catch(error => console.log(error))
  })
  .catch(error => console.error(error))
