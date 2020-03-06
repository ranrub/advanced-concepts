require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// there is no preset on the remote-media-secure mapping
// authenticated: bothe original and derived are protected
const url = cloudinary.url('remote-media-secure/grapes.jpg',
  { type: 'private', sign_url: true, secure: true })
console.log(url)
open(url)
