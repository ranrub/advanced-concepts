require('dotenv').config()
const cloudinary = require('cloudinary').v2

console.log(cloudinary.url('remote-media/raw/data.json',
  { resource_type: 'raw', secure: true }))
