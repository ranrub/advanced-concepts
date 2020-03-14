require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// upload by referencing folder mapped to auto upload remote path
const url = cloudinary.url(cloudinary.url('remote-media/images/pineapple.jpg'))
console.log(url)
open(url)
