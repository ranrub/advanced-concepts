require('dotenv').config()
const cloudinary = require('cloudinary').v2

const open = require('open')

const url = cloudinary.url('sample.jpg', {
  sign_url: true,
  custom_function: {
    function_type: 'remote',
    source: 'https://secure-caverns-90265.herokuapp.com/api/file'
  }
})
console.log(url)
open(url)
// https://admiring-jennings-33c451.netlify.com/.netlify/functions/hello-cl
// https://5e7e96e396a08b000760711d--admiring-jennings-33c451.netlify.com/.netlify/functions/cl_hello

// http://res.cloudinary.com/pictures77/image/upload/s--aUbxjjbN--/fn_remote:aHR0cHM6Ly81ZTdlOTZlMzk2YTA4YjAwMDc2MDcxMWQtLWFkbWlyaW5nLWplbm5pbmdzLTMzYzQ1MS5uZXRsaWZ5LmNvbS8ubmV0bGlmeS9mdW5jdGlvbnMvY2xfaGVsbG8=/sample.jpg