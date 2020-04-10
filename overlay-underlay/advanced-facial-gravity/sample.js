require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')
const url = cloudinary.url('woman-standing', {
  overlay: 'mask-green',
  gravity: 'adv_face',
  // gravity: 'adv_eyes',
  // gravity: 'face',
  flags: 'region_relative',
  width: '1.3',
  height: '0.7',
  crop: 'fill',
  y: 30
})
console.log(url)
open(url)
