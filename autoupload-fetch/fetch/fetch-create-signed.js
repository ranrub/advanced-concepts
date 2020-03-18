require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url(
  'https://cloudinary-training.github.io/advanced-concepts/assets/images/dolphin.jpg',
  { type: 'fetch', sign_url: true }
)
console.log(url)
open(url)
