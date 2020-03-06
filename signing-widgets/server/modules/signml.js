const crypto = require('crypto')

exports.signmedialib = function () {
  const timestamp = (new Date()).getTime()
  const strtosign = `cloud_name=${process.env.CLOUD_NAME}&timestamp=${timestamp}&username=${process.env.USERNAME}${process.env.API_SECRET}`
  const signature = crypto.createHash('sha256').update(strtosign).digest('hex')
  return ({ signature: signature, timestamp: timestamp })
}
