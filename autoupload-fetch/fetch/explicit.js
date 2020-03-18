require('dotenv').config()
const cloudinary = require('cloudinary').v2
// const open = require('open')

// get a fresh copy of the image
// upload something else to oranges
cloudinary.uploader
  .explicit(
    'https://cloudinary-training.github.io/advanced-concepts/assets/images/oranges.jpg',
    {
      type: 'fetch',
      invalidate: true
    }
  )
  .then(result => {
    console.log('result', result)
  })
  .catch(error => console.log('error', error))

// result {
//   public_id: 'https://cloudinary-training.github.io/advanced-concepts/assets/images/oranges.jpg',
//   version: 1584542533,
//   signature: '4f0088c881d663aa34f367c764d37c24c1723079',
//   width: 3160,
//   height: 2072,
//   format: 'jpg',
//   resource_type: 'image',
//   created_at: '2020-03-18T14:24:45Z',
//   bytes: 124648,
//   type: 'fetch',
//   etag: '73150d227bc6ab4c58279b0bde038d39',
//   url: 'http://res.cloudinary.com/pictures77/image/fetch/v1584542533/https://cloudinary-training.github.io/advanced-concepts/assets/images/oranges.jpg',
//   secure_url: 'https://res.cloudinary.com/pictures77/image/fetch/v1584542533/https://cloudinary-training.github.io/advanced-concepts/assets/images/oranges.jpg',
//   access_mode: 'public'
// }
