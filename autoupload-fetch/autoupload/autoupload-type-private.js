require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url('remote-media-secure/cherries.jpg',
  {
    type: 'private',
    secure: true,
    resource_type: 'image',
    sign_url: true
  })
console.log(url)
open(url)

// https://res.cloudinary.com/picturecloud7/image/private/s--j5G57Mm9--/v1/remote-media-secure/cherries.jpg
