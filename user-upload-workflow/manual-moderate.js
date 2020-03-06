require('dotenv').config()
const cloudinary = require('cloudinary').v2

function setUpModeration (publicId) {
  console.log(`arg is  ${publicId}`)
  cloudinary.uploader.explicit(publicId, {
    moderation: 'manual',
    notification_url: 'https://webhook.site/5e96159b-630d-4fbe-91ed-d3f2807aedca'
  })
}

// main

const publicId = 'wine-bottle-5'
setUpModeration(publicId)
