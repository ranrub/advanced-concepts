require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url(`${process.env.ASSET_SOURCE_BASE}/assets/images/oranges.jpg`,
  {
    type: 'fetch',
    width: 400,
    height: 400,
    crop: 'limit',
    radius: '30',
    effect: 'sharpen',
    fetch_format: 'auto'
  }
)
console.log(url)
open(url)
