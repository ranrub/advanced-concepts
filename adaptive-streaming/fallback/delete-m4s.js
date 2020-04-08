require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.api
  .transformations({ max_results: 500 })
  .then(result => {
    // console.log(result)
    for (const xform of result.transformations) {
      // delete transformation ending in /m4s
      if (xform.name.substring(xform.name.length - 4) === '/m4s') {
        console.log('destroy:', xform.name)
        cloudinary.uploader
          .destroy(xform.name)
          .then(result => console.log(result))
          .catch(error => console.log(error))
      } else {
        console.log('keep')
        // console.log('keep:', xform.name)
      }
    }
  })
  .catch(error => console.log(error))
