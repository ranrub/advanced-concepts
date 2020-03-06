require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url('shell', {
  transformation: [
    { width: '300', crop: 'scale', opacity: 60 },
    {
      underlay: {
        font_family: 'Roboto',
        font_size: 100,
        font_weight: 'bold',
        text: 'Fibonacci'
      },
      color: '#000',
      gravity: 'south',
      width: 200,
      y: -80
    }
  ]
})

console.log(url)
open(url)
