require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url('woman-standing', {
  crop: 'fill',
  flags: 'region_relative',
  gravity: 'adv_face',
  // gravity: 'adv_eyes',
  // gravity: 'face',
  y: 30,
  overlay: 'mask-green',
  width: '1.3',
  height: '0.7'
})
console.log(url)
open(url)

