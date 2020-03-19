require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

// main layer is shell
const url = cloudinary.url('shell', {
  transformation: [
    { width: '200', crop: 'scale' },
    // gray surface is under shell
    {
      underlay: {
        public_id: 'gray-surface'
      },
      width: 450
    },
    // Fibonnci text is over shell
    {
      overlay: {
        font_family: 'Arial',
        font_size: 20,
        text: '%20%20Fibonacci%20%20'
      },
      gravity: 'east',
      x: 25,
      y: 100
    },
    // Explore is over shell
    {
      overlay: {
        font_family: 'Arial',
        font_size: 20,
        text: '%20%20Explore%20%20'
      },
      gravity: 'west',
      x: 25,
      y: -100
    }
  ]
})

console.log(url)
open(url)

// const url = cloudinary.url().transformation(
//   new Transformation().width(80).height(80).crop("fill")
//     .chain().underlay("site_bg.jpg").width(80).height(80).effect("brightness:100")
// ).imageTag("smartphone.png");
