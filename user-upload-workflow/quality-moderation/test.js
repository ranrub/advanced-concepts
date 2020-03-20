require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload('./assets/images/image-from-tv.jpg', {
    public_id: 'image-from-tv-1',
    quality_analysis: true,
    moderation: 'manual'
  })
  .then(uploadResult => {
    console.log(uploadResult)
  })
  .catch(error => console.error(error))

// 'https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
