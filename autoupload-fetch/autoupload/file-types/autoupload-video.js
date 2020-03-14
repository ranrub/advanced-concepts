require('dotenv').config()
const cloudinary = require('cloudinary').v2

console.log(cloudinary.url('remote-media/video/rooster.mp4',
  { resource_type: 'video', secure: true }))
