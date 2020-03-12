require('dotenv').config()
const cloudinary = require('cloudinary').v2

const image = cloudinary.image('shell', {})
console.log(image)
