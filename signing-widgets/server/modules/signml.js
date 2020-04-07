require('dotenv').config()
const crypto = require('crypto')
const cloudinary = require('cloudinary').v2
const apiSecret = cloudinary.config().api_secret

const signmedialib = () => {
  const timestamp = new Date().getTime()
  const strtosign = `cloud_name=${process.env.CLOUD_NAME}&timestamp=${timestamp}&username=${process.env.USER_NAME}${apiSecret}`
  const signature = crypto
    .createHash('sha256')
    .update(strtosign)
    .digest('hex')
  return { signature, timestamp }
}

module.exports = {
  signmedialib
};