require('dotenv').config()
const cloudinary = require('cloudinary').v2
// use upload API to upload an authenticated asset
cloudinary.uploader
  .upload('https://res.cloudinary.com/demo/video/upload/elephants.mp4', {
    folder: 'moderated',
    use_filename: true,
    unique_filename: false,
    resource_type: 'video',
    type: 'authenticated',
    moderation: 'google_video_moderation:possible',
    notification_url:
      'https://webhook.site/e2702062-2f32-435d-b997-c245d783ed1b',
    invalidate: true
  })
  .then(uploadResult => {
    console.log(uploadResult)
  })
  .catch(error => console.error(error))
