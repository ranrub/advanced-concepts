require('dotenv').config()
const cloudinary = require('cloudinary').v2
const open = require('open')

const today = new Date().toISOString()

const addDays = days => {
  const currentDate = new Date()
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + days
  )
}
// set to expire after 1 day
const startDate = addDays(1).toISOString()
const endDate = addDays(8).toISOString()
console.log('start date', startDate)
console.log('end date', endDate)

cloudinary.uploader
  .upload('./assets/images/special-fish.jpg', {
    public_id: 'special-fish',
    type: 'upload',
    overwrite: true,
    invalidate: true,
    access_control: [
      { access_type: 'anonymous', start: startDate, end: endDate }
    ]
  })
  .then(uploadResult => {
    console.log(uploadResult)
    const url = uploadResult.secure_url
    open(url)
  })
  .catch(error => console.error(error))
