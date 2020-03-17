require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload('./assets/video/Joe-Biden-gana-en-Carolina-del-Sur-previo-al-supermartes.mp4', {
    resource_type: 'video',
    public_id: 'azure-translation-video',
    raw_convert: 'azure_video_indexer:srt:vtt:es-ES',
    notification_url:
    'https://webhook.site/17a3d46c-5d18-46b0-ab6c-94b12d7f645c'
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))

//   rebeccapeltz@MacBook-Pro-2 advanced-concepts % node user-upload-workflow/video-transcription/azure-tagging-transcription.js
// {
//   public_id: 'azure-translation-video',
//   version: 1583177783,
//   signature: 'f23ebf2fb2b76c3dd425adcd870631eef88fc9d6',
//   width: 848,
//   height: 480,
//   format: 'mp4',
//   resource_type: 'video',
//   created_at: '2020-03-02T19:36:23Z',
//   tags: [],
//   pages: 0,
//   bytes: 5310501,
//   type: 'upload',
//   etag: '2af4940bce1525a00515bf58696f926a',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/picturecloud7/video/upload/v1583177783/azure-translation-video.mp4',
//   secure_url: 'https://res.cloudinary.com/picturecloud7/video/upload/v1583177783/azure-translation-video.mp4',
//   backup_url: 'api.cloudinary.com/v1_1/picturecloud7/resources/7b5c88865fe3394bcc6fc313880a27cb/backup/902d1da7371151dcebe36d5aa51126e3',
//   access_mode: 'public',
//   info: { multiple: { azure_video_indexer: [Object] } },
//   audio: {
//     codec: 'aac',
//     bit_rate: '127999',
//     frequency: 44100,
//     channels: 2,
//     channel_layout: 'stereo'
//   },
//   video: {
//     pix_format: 'yuv420p',
//     codec: 'h264',
//     level: 31,
//     profile: 'Main',
//     bit_rate: '298889',
//     dar: '53:30'
//   },
//   is_audio: false,
//   frame_rate: 29.97002997002997,
//   bit_rate: 435001,
//   duration: 97.663129,
//   rotation: 0,
//   original_filename: 'Joe-Biden-gana-en-Carolina-del-Sur-previo-al-supermartes',
//   nb_frames: 2925
// }
