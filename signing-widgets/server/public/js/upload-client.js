document.addEventListener('DOMContentLoaded', function(event) {
  generateUploadSignature()
})

function generateUploadSignature() {
  fetch('//localhost:3000/api/signupload')
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result)
      uploadFn(result)
    })
    .catch(error => {
      console.log(error)
    })
}

const uploadFn = function(result) {
  const options = {
    cloudName: result.cloudname,
    apiKey: result.apikey,
    uploadSignatureTimestamp: result.timestamp,
    uploadSignature: result.signature,
    cropping: false
  }
  const myWidget = window.cloudinary.createUploadWidget(
    options,
    (error, result) => {
      console.log(error)
      if (result) {
        console.log(result.event)
        if (result.event === 'success') {
          console.log(
            'Done! Here is the image info: ',
            JSON.stringify(result.info, null, 1)
          )
          document.querySelector('#uploaded').src = result.info.secure_url
        }
      }
    }
  )
  document.getElementById('upload_widget').addEventListener(
    'click',
    () => {
      myWidget.open()
    },
    false
  )
}
