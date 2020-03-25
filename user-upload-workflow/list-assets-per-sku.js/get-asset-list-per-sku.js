require('dotenv').config()
// const  = require('cloudinary').v2
const open = require('open')

const data = {
  sku: 'sku12345'
}
const api = `https://res.cloudinary.com/pictures77/image/list/${data.sku}.json`
open(api)
