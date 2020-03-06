// docs: https://cloudinary.com/documentation/upload_images#update_already_uploaded_images
// test public_id is dolphin which is authenticated

require('dotenv').config()

const crypto = require('crypto')
const URLSafeBase64 = require('urlsafe-base64')
const open = require('open')

// dolphin is authenticated
// hand coded signature
const transformation = 'c_mfit, f_auto ,h_300, q_auto, w_300'
const publicId = 'dolphin'
const secret = process.env.API_SECRET
const toSign = [transformation, publicId].join('/') + secret

const s = URLSafeBase64.encode(crypto.createHash('sha1').update(toSign).digest()).slice(0, 8)

const signature = 's--' + s + '--'
const url = ['https://res.cloudinary.com/picturecloud7/image/authenticated', signature, transformation, publicId].join('/')
console.log('hand code:', url)
open(url)

// https://res.cloudinary.com/picturecloud7/image/authenticated/s--Oe58XLUa--/c_mfit,f_auto,h_300,q_auto,w_300/dolphin
