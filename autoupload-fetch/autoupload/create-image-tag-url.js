require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// create an auto-upload image tag with url with transformations
// add the tag created here to the index.html
const url = cloudinary.url(cloudinary.url('remote-media/images/pineapple.jpg'))
console.log(url)
open(url)
