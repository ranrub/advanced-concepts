require('dotenv').config()
const cloudinary = require('cloudinary').v2
const bopen = require('bopen')

const url = cloudinary.url('remote-media/raw/data.json', {
  resource_type: 'raw',
  secure: true
})
console.log(url)
bopen(url, { browser: 'chrome', incognito: true }) // bypass browser cache
