require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// supply the tag shared by images to be animated
cloudinary.uploader
  .multi('sea')
  .then(result => {
    console.log(result)
    const url = cloudinary.url('sea.gif', { type: 'multi' })
   // https://res.cloudinary.com/cloudinary-training/image/upload/dl_2000/sea_wge9jg.gif
    open(url)
  })
  .catch(error => {
    console.log(error)
  })
