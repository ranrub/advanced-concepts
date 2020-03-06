require('dotenv').config()
const cloudinary = require('cloudinary').v2

const upOptions =
{
  resource_type: 'video',
  eager: [
    { streaming_profile: 'hd', format: 'm3u8' },
    { streaming_profile: 'hd', format: 'mpd' }],
  eager_async: true,
  eager_notification_url: 'https://webhook.site/59da63e4-84aa-4fab-bc4b-620567206e6d',
  public_id: 'whale',
  invalidate: true
}
cloudinary.uploader.upload('assets/video/humpbackwhale_singing.webm.360p.vp9.webm', upOptions)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
