require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// base has a blue background
// notice the underlay picks up the true color of the base background (coral red)
// text underlay is blue with a yellow background - notice the effect of base background
// we've added URL encoded characters for space %20
// base image is 300 x 400
// image rendered is 300 x 480  the -80 added 80 to the dimension of the overall image
const url = cloudinary.url('shell', {
  transformation: [
    { width: '300', crop: 'scale', opacity: 60, background: 'rgb:ff2222' },
    {
      underlay: {
        font_family: 'Pacifio',
        font_size: 15,
        font_weight: 'bold',
        text_align: 'center',
        letter_spacing: '5',
        line_spacing: '7',
        text: '%20%20%20Fibonacci%20%20%20%0ASpiral'
      },
      color: 'blue',
      opacity: '50',
      background: 'yellow',
      gravity: 'south',
      width: 300,
      y: -80
    }
  ]
})

console.log(url)
open(url)
