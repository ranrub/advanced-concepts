require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url('woman-standing', {
  flags: 'region_relative',
  gravity: 'adv_faces',
  overlay: 'mask',
  width: '2.5',
  angle: 'vflip'
})
console.log(url)
open(url)

// /c_scale,fl_region_relative,g_adv_faces,l_mask,w_1.0,y_0.05/

