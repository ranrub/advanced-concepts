require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url(`${process.env.ASSET_SOURCE_BASE}/assets/images/oranges.jpg`,
  { type: 'fetch' })
console.log(url)
open(url)

// http://res.cloudinary.com/picturecloud7/image/fetch/${process.env.ASSET_SOURCE_BASE}/assets/images/oranges.jpg
