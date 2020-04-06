const express = require('express')
const router = express.Router()
const signature = require('../modules/signupload')

// using this API should require authentication
router.get('/', function (req, res, next) {
  const sig = signature.signupload()
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp,
    cloudname: sig.cloudname,
    apikey: sig.apikey
  })
})
module.exports = router
