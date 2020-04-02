const cloudName = '<your cloud name>'
const uploadPreset = '<your unsigned upload preset>'
const apiKey = '<your api key>'
const userEmail = '<your username email>'

document.addEventListener('DOMContentLoaded', async () => {
  // gallery
  renderGallery()

  // upload widget
  renderUploadWidget()

  // media library widget unsigned
  renderMediaLibrary()

  // video player
  renderVideoPlayer()
})

// gallery
function renderGallery() {
  const myGallery = window.cloudinary.galleryWidget({
    container: '#my-gallery',
    cloudName: 'demo',
    mediaAssets: [
      {
        tag: 'electric_car_product_gallery_demo'
      },
      {
        tag: 'electric_car_product_gallery_demo',
        mediaType: 'video'
      },
      {
        tag: 'electric_car_360_product_gallery_demo',
        mediaType: 'spin'
      }
    ]
  })

  myGallery.render()
}

// upload widget
function renderUploadWidget () {
  const myWidget = window.cloudinary.createUploadWidget({
    cloudName: cloudName,
    uploadPreset: uploadPreset
  },
  (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info)
      document.querySelector('#uploaded-image').setAttribute('src', result.info
        .secure_url)
    }
  }
  )

  document.getElementById('upload_widget').addEventListener(
    'click',
    function () {
      myWidget.open()
    },
    false
  )
  // var myWidget = await window.cloudinary
  //   .createUploadWidget({
  //     cloudName: cloudName,
  //     uploadPreset: uploadPreset
  //   })
  //   .then(result => {
  //     console.log('Done! Here is the image info: ', result.info)
  //     document
  //       .querySelector('#uploaded-image')
  //       .setAttribute('src', result.info.secure_url)
  //   })
  //   .catch(error => console.log(error))

  // document.getElementById('upload_widget').addEventListener(
  //   'click',
  //   event => {
  //     myWidget.open()
  //   },
  //   false
  // )
}

// media library
function renderMediaLibrary() {
  window.ml = window.cloudinary.createMediaLibrary(
    {
      cloud_name: cloudName,
      api_key: apiKey,
      username: userEmail,
      button_class: 'myBtn',
      button_caption: 'Select Image or Video'
    },
    {
      insertHandler: function(data) {
        data.assets.forEach(asset => {
          console.log('Inserted asset:', JSON.stringify(asset, null, 2))
          const li = document.createElement('li')
          // Create anchor element
          const a = document.createElement('a')
          li.appendChild(a)
          // Create the text node for anchor element
          const link = document.createTextNode(asset.public_id)

          // Append the text node to anchor element
          a.appendChild(link)

          // Set the title
          a.title = 'asset.public_id'

          // Set the href property
          a.href = asset.secure_url
          document.querySelector('#inserted-media').appendChild(li)
        })
      }
    },
    document.getElementById('open-btn')
  )
}

// video player
function renderVideoPlayer() {
  const cld = window.cloudinary.Cloudinary.new({
    cloud_name: 'demo'
  })
  const demoplayer = cld.videoPlayer('doc-player').width(600)
  demoplayer.source('race_road_car')
}
