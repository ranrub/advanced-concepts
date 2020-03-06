require('dotenv').config()
const cloudinary = require('cloudinary').v2

// main run background removal
cloudinary.uploader
  .upload(
    'https://images.pexels.com/photos/1479706/pexels-photo-1479706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    {
      public_id: 'wine-bottle-5',
      background_removal: 'cloudinary_ai',
      notification_url:
        'https://webhook.site/5e96159b-630d-4fbe-91ed-d3f2807aedca'
    }
  )
  .then(uploadResult => {
    console.log(uploadResult)
  })
  .catch(error => console.error(error))
