require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.uploader
  .upload('./assets/images/blue-chair.jpg', {
    responsive_breakpoints: {
      create_derived: true,
      bytes_step: 20000,
      min_width: 200,
      max_width: 1000,
      transformation: { crop: 'fill', aspect_ratio: '16:9', gravity: 'auto' }
    }
  })
  .then(result => {
    console.log(result)
    console.log(
      result.responsive_breakpoints[0].breakpoints.map(item => item.secure_url)
    )
  })
  .catch(error => console.log(error))
