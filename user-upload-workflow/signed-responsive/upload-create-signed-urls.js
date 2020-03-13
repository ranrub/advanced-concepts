require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload('./assets/images/blue-chair.jpg', {
    public_id: 'blue-chair',
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
    console.log(
      result.responsive_breakpoints[0].breakpoints.map(item => item.secure_url)
    )
  })
  .catch(error => console.log(error))

// {
//   public_id: 'blue-chair',
//   version: 1584055466,
//   signature: '60f0986c4d19dbbf6fdfa6684b6b6daf6192c6a9',
//   width: 4000,
//   height: 6000,
//   format: 'jpg',
//   resource_type: 'image',
//   created_at: '2020-03-12T23:24:26Z',
//   tags: [],
//   bytes: 7788998,
//   type: 'upload',
//   etag: '4e5b29a34eaf29901b44dc2b501861c5',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/pictures77/image/upload/v1584055466/blue-chair.jpg',
//   secure_url: 'https://res.cloudinary.com/pictures77/image/upload/v1584055466/blue-chair.jpg',
//   access_mode: 'public',
//   original_filename: 'blue-chair',
//   responsive_breakpoints: [ { breakpoints: [Array], transformation: 'ar_16:9,c_fill,g_auto' } ]
// }
// [
//   'https://res.cloudinary.com/pictures77/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_1000/v1584055466/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_984/v1584055466/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_876/v1584055466/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_758/v1584055466/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_616/v1584055466/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_437/v1584055466/blue-chair.jpg',
//   'https://res.cloudinary.com/pictures77/image/upload/ar_16:9,c_fill,g_auto/c_scale,w_200/v1584055466/blue-chair.jpg'
// ]
