require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const url = cloudinary.url('baseball-cap', {
  transformation: [
    {
      variables: [
        ['$w', '500'],
        ['$correctx', '0.04'],
        ['$correcty', '0.1'],
        ['$logoscalar', '0.4'],
        ['$color', '!pink!']
      ]
    },
    {
      transformation: ['hat-transform']
    }
  ]
})

console.log(url)
open(url)

// cloudinary.image('sample.jpg', {
//   transformation: [
//     { transformation: ['jpg_with_quality_30'] },
//     { transformation: ['crop_400x400'] },
//     { transformation: ['fit_100x150'] }
//   ]
// })

// cloudinary.video('rafting', {
//   transformation: ['highqual-if-tagged'],
//   variables: [
//     ['$qualtag', '!important!'],
//     ['$delwidth', '450']
//   ]
// })
