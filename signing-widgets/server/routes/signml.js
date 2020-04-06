const express = require('express')
const router = express.Router()
const signature = require('../modules/signml')


// using this API should require authentication
router.get('/', function (req, res, next) {
  const sig = signature.signmedialib()
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp,
    cloudname: sig.cloudname,
    apikey: sig.apikey,
    username: sig.username
  })
})
module.exports = router
