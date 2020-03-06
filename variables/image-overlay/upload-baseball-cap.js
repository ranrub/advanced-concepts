// upload a small video such as a customer might upload from an iphone
require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

cloudinary.uploader.upload('./assets/images/baseball-cap.png', {
  public_id: 'baseball-cap',
  type: 'upload',
  overwrite: true,
  invalidate: true,
  resource_type: 'image'
})
  .then(result => {
    console.log(result)
    open(result.secure_url)
  })
  .catch(error => {
    console.log(error)
  })
