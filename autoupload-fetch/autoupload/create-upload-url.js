require('dotenv').config()
const cloudinary = require('cloudinary').v2
const bopen = require('bopen')
const open = require('open')

// upload by referencing folder mapped to auto upload remote path
// look at network caching
const url = cloudinary.url(cloudinary.url('remote-media/images/dolphin.jpg'))
console.log(url)
bopen(url, { browser: 'chrome', incognito: true })  // bypass browser cache
open(url) // could have browser cache
