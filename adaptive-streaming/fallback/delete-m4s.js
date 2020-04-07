require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.api
  .list_streaming_profiles()
  .then(result => {
    console.log(result)
    for (const profile of result.data) {
      // delete transformation ending in /m4s
      if (profile.name.substring(profile.name.length - 4) === '/m4s') {
        console.log('destroy:', profile.name)
        cloudinary.destroy(profile.name)
      } else {
        console.log('keep:', profile.name)
      }
    }
  })
  .catch(error => console.log(error))
