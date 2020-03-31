require('dotenv').config()
const cloudinary = require('cloudinary').v2
const archive = require('./create-archive.js')

// license value gets added as tag and context
const uploadImage = async filename => {
  console.log(filename)
  try {
    const response = await cloudinary.uploader.upload(filename, {
      upload_preset: 'photo-share'
    })
    await console.log(`uploaded: ${response.public_id}`)
    return response.public_id
  } catch (error) {
    console.log('uploadImage error', JSON.stringify(error))
    throw new Error(error)
  }
}

const photos = ['./assets/images/dolphin.jpg', './assets/images/goldfish.jpg']
for (const photo of photos) {
  const publicId = uploadImage(photo)
  console.log(publicId)
}
archive.createArchive()
