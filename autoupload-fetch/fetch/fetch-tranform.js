require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url(`${process.env.ASSET_SOURCE_BASE}/assets/images/oranges.jpg`,
  {
    type: 'fetch',
    width: 400,
    height: 400,
    crop: 'fill',
    gravity: 'auto',
    radius: 'max',
    effect: 'sharpen',
    fetch_format: 'auto'
  }
)
console.log(url)
open(url)

// http://res.cloudinary.com/picturecloud7/image/fetch/c_fill,e_sharpen,f_auto,g_auto,h_400,r_max,w_400/`${process.env.ASSET_SOURCE_BASE}/assets/images/oranges.jpg
