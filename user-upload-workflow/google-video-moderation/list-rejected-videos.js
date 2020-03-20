require('dotenv').config()
const cloudinary = require('cloudinary').v2

// get resources in moderation queue
// cloudinary.v2.api.resources_by_moderation(moderation_kind, status, options, callback);

cloudinary.api
  .resources_by_moderation('google_video_moderation', 'rejected', {
    resource_type: 'video'
  })
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
