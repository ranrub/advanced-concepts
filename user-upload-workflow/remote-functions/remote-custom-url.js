require('dotenv').config()
const cloudinary = require('cloudinary').v2

const open = require('open')

const url = cloudinary.url('shell', {
  sign_url: true,
  custom_function: {
    function_type: 'remote',
    source: 'https://secure-caverns-90265.herokuapp.com/api/file'
  }
})
console.log(url)
open(url)

// https://res.cloudinary.com/pictures77/image/upload/s--PMUhGYJY--/fn_remote:aHR0cHM6Ly9zZWN1cmUtY2F2ZXJucy05MDI2NS5oZXJva3VhcHAuY29tL2FwaS9maWxl/shell
