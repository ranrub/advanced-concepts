const crypto = require('crypto')
const utf8 = require('utf8')

exports.signupload = function () {
  const timestamp = (new Date()).getTime()
  const strtosign = `source=uw&timestamp=${timestamp}${process.env.API_SECRET}`
  const signature = utf8.encode(crypto.createHash('sha1').update(strtosign).digest('hex'))
  return { signature: signature, timestamp: timestamp }
}
