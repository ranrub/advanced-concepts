// upload a small video such as a customer might upload from an iphone
require('dotenv').config()

const cloudinary = require('cloudinary').v2
const open = require('open')

const color = 'lightblue'
const url = cloudinary.url('baseball-cap', {
  transformation: [
    {
      variables: [
        ['$w', 500],
        ['$correctx', '0.04'],
        ['$correcty', '0.1'],
        ['$logoscalar', '0.4'],
        ['$color', `!${color}!`]
      ]
    },
    {
      effect: 'replace_color:$color:30:111111'
    },
    { width: '$w', crop: 'scale' },
    {
      overlay: 'logo-big',
      crop: 'fit',
      gravity: 'north',
      width: '$width * $logoscalar',
      x: '$width * $correctx',
      y: '$width * 0.1'
    },
    {
      dpr: '2.0',
      fetch_format: 'auto',
      quality: 'auto'
    }
  ]
})
console.log(url)
open(url)
