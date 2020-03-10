require('dotenv').config()
const cloudinary = require('cloudinary').v2

const video = cloudinary.video('ul-video', {
  overlay: { public_id: 'ul-video.srt' }
})
console.log(video)
