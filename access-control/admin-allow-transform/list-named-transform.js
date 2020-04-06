require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.api
  .transformations()
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
