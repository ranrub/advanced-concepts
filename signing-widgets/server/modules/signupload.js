require('dotenv').config()
const cloudinary = require('cloudinary').v2
const apiSecret = cloudinary.config().api_secret
const cloudName = cloudinary.config().cloud_name
const apiKey = cloudinary.config().api_key

const crypto = require('crypto')
const utf8 = require('utf8')

exports.signupload = function() {
  const timestamp = new Date().getTime()
  const strtosign = `source=uw&timestamp=${timestamp}${apiSecret}`
  const signature = utf8.encode(
    crypto
      .createHash('sha1')
      .update(strtosign)
      .digest('hex')
  )
  return {
    signature: signature,
    timestamp: timestamp,
    cloudname: cloudName,
    apikey: apiKey
  }
}
