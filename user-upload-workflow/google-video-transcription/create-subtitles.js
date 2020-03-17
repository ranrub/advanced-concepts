require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload('./assets/video/UnderwritersLaboratoryPsa.mp4', {
    resource_type: 'video',
    public_id: 'ul-video',
    raw_convert: 'google_speech:srt:vtt',
    notification_url:
      'https://webhook.site/17a3d46c-5d18-46b0-ab6c-94b12d7f645c'
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))
// google ai video transcription

// {
//   public_id: 'ul-video',
//   version: 1583869442,
//   signature: '8e6f480f7d579eed5f994004cac132477c025c15',
//   width: 640,
//   height: 480,
//   format: 'mp4',
//   resource_type: 'video',
//   created_at: '2020-03-10T19:44:02Z',
//   tags: [],
//   pages: 0,
//   bytes: 6117527,
//   type: 'upload',
//   etag: '3bf22301335000640297ce46b1d66a24',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/pictures77/video/upload/v1583869442/ul-video.mp4',
//   secure_url: 'https://res.cloudinary.com/pictures77/video/upload/v1583869442/ul-video.mp4',
//   access_mode: 'public',
//   info: { raw_convert: { google_speech: [Object] } },
//   audio: {
//     codec: 'aac',
//     bit_rate: '160131',
//     frequency: 48000,
//     channels: 2,
//     channel_layout: 'stereo'
//   },
//   video: {
//     pix_format: 'yuv420p',
//     codec: 'h264',
//     level: 30,
//     profile: 'Constrained Baseline',
//     bit_rate: '1444134'
//   },
//   is_audio: false,
//   frame_rate: 29.97,
//   bit_rate: 1608265,
//   duration: 30.43043,
//   rotation: 0,
//   original_filename: 'UnderwritersLaboratoryPsa',
//   nb_frames: 912
// }
