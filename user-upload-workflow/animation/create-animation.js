require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// supply the tag shared by images to be animated
cloudinary.uploader
  .multi('sea')
  .then(result => {
    console.log(result)
    const url = cloudinary.url('sea.gif', { type: 'multi' })
    cloudinary.uploader
      .upload(url, {
        use_filename: true,
        unique_filename: false
      })
      .then(uploadResult => {
        console.log(uploadResult)
        const gifurl = cloudinary.url(uploadResult.public_id, {
          delay: 2000
        })
        console.log(gifurl)
        open(gifurl)
      })
      .catch(error => console.error(error))
    // upload url and add delay
    // https://res.cloudinary.com/cloudinary-training/image/upload/dl_2000/sea_wge9jg.gif
    // open(url)
  })
  .catch(error => {
    console.log(error)
  })
