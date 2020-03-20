require('dotenv').config()
const cloudinary = require('cloudinary').v2

// using add on Google AI Video Moderation
// Google cloud video intelligence
cloudinary.uploader
  .upload('./assets/video/hot-tub.mp4', {
    resource_type: 'video',
    public_id: 'hot-tub',
    moderation: 'google_video_moderation:possible',
    notification_url:
      'https://webhook.site/17a3d46c-5d18-46b0-ab6c-94b12d7f645c'
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))

// {
//   public_id: 'hot-tub',
//   version: 1584658428,
//   signature: 'b01258db2b3ba91e8951a2b4236eb73bf1a1ccf3',
//   width: 720,
//   height: 1280,
//   format: 'mp4',
//   resource_type: 'video',
//   created_at: '2020-03-19T22:53:48Z',
//   tags: [],
//   pages: 0,
//   bytes: 4196970,
//   type: 'upload',
//   etag: 'bf91c2c4e70585ca5b9e316768664b48',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/pictures77/video/upload/v1584658428/hot-tub.mp4',
//   secure_url: 'https://res.cloudinary.com/pictures77/video/upload/v1584658428/hot-tub.mp4',
//   access_mode: 'public',
//   moderation: [ { status: 'pending', kind: 'google_video_moderation' } ],
//   audio: {},
//   video: {
//     pix_format: 'yuv420p',
//     codec: 'h264',
//     level: 32,
//     profile: 'High',
//     bit_rate: '2456660'
//   },
//   frame_rate: 29.97002997002997,
//   bit_rate: 2460309,
//   duration: 13.646967,
//   rotation: 0,
//   original_filename: 'hot-tub',
//   nb_frames: 409
// }
