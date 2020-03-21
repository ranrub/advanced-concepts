const crypto = require('crypto')
const utf8 = require('utf8')
const cloudinary = require('cloudinary').v2
const apiSecret = cloudinary.config().api_secret


exports.signupload = function () {
  const timestamp = (new Date()).getTime()
  const strtosign = `source=uw&timestamp=${timestamp}${apiSecret}`
  const signature = utf8.encode(crypto.createHash('sha1').update(strtosign).digest('hex'))
  return { signature: signature, timestamp: timestamp }
}
