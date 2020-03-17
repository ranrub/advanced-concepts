require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload('./assets/images/blue-chair.jpg', {
    public_id: 'blue-chair',
    type: 'authenticated',
    invalidate: true,
    sign_url: true,
    responsive_breakpoints: {
      create_derived: true,
      bytes_step: 20000,
      min_width: 200,
      max_width: 1000,
      transformation: { crop: 'fill', aspect_ratio: '16:9', gravity: 'auto' }
    }
  })
  .then(result => {
    console.log(result)
    const urls = result.responsive_breakpoints[0].breakpoints.map(
      item => item.secure_url
    )
    console.log(urls)
  })
  .catch(error => console.log(error))

// {
//   public_id: 'blue-chair',
//   version: 1584488545,
//   signature: 'c49638690ed49a6d96dcb8ec5e3df9c79fcba58e',
//   width: 4000,
//   height: 6000,
//   format: 'jpg',
//   resource_type: 'image',
//   created_at: '2020-03-17T23:42:25Z',
//   tags: [],
//   bytes: 7788998,
//   type: 'authenticated',
//   etag: '4e5b29a34eaf29901b44dc2b501861c5',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/pictures77/image/authenticated/s--RqD_AA9c--/v1584488545/blue-chair.jpg',
//   secure_url: 'https://res.cloudinary.com/pictures77/image/authenticated/s--RqD_AA9c--/v1584488545/blue-chair.jpg',
//   access_mode: 'public',
//   overwritten: true,
//   original_filename: 'blue-chair',
//   responsive_breakpoints: [ { breakpoints: [Array], transformation: 'ar_16:9,c_fill,g_auto' } ]
// }
// [
//   'https://res.cloudinary.com/pictures77/image/authenticated/s--YvO6zAJu--/ar_16:9,c_fill,g_auto/c_scale,w_1000/v1584488545/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/authenticated/s--vF5SXaj8--/ar_16:9,c_fill,g_auto/c_scale,w_984/v1584488545/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/authenticated/s--IFXD5ndi--/ar_16:9,c_fill,g_auto/c_scale,w_876/v1584488545/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/authenticated/s--zyXLQwVM--/ar_16:9,c_fill,g_auto/c_scale,w_758/v1584488545/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/authenticated/s--lWJuhzc4--/ar_16:9,c_fill,g_auto/c_scale,w_616/v1584488545/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/authenticated/s--HgxrJ8na--/ar_16:9,c_fill,g_auto/c_scale,w_437/v1584488545/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/authenticated/s--qXOGKrvb--/ar_16:9,c_fill,g_auto/c_scale,w_200/v1584488545/blue-chair.jpg'
// ]
