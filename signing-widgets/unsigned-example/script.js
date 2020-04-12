const cloudName = 'pictures77'
// upload widget needs unsigned preset
const uploadPreset = 'widget-preset'
// media library widget needs apiKey and user email
const apiKey = '326563836554386'
const userEmail = 'rebecca.peltz@cloudinary.com'

document.addEventListener('DOMContentLoaded', async () => {
  // upload widget unsigned
  renderUploadWidget()

  // media library widget unsigned
  renderMediaLibrary()
})

// upload
const processResults = (error, result) => {
  if (!error && result && result.event === 'success') {
    console.log(result)
    // if successful renders to page
    document.querySelector('#uploaded').src = result.info.secure_url
  }
}
const mlOptions = {
  cloudName: cloudName,
  uploadPreset: uploadPreset
}
const renderUploadWidget = () => {
  const myWidget = window.cloudinary.createUploadWidget(
    mlOptions,
    processResults
  )
  document
    .getElementById('upload_widget')
    .addEventListener('click', () => myWidget.open(), false)
}

// media library
const insertHandler = data => {
  data.assets.forEach(asset =>
    console.log('Inserted asset:', JSON.stringify(asset, null, 1))
  )
}
const uploadOptions = {
  cloud_name: cloudName,
  api_key: apiKey,
  username: userEmail,
  button_class: 'myBtn',
  button_caption: 'Select Image or Video'
}
const renderMediaLibrary = () => {
  window.cloudinary.createMediaLibrary(
    uploadOptions,
    insertHandler,
    document.querySelector('#ml-button')
  )
}
