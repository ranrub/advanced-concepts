document.addEventListener('DOMContentLoaded', () => {
  generateMLSignature()
})

async function generateMLSignature() {
  try {
    const response = await fetch('//localhost:3000/api/signml')
    const json = await response.json()
    mlFn(json)
  } catch (error) {
    console.lo(error)
  }
}

const mlFn = result => {
  const config = {
    cloud_name: result.cloudname,
    api_key: result.apikey,
    username: result.username,
    timestamp: result.timestamp,
    signature: result.signature,
    button_class: 'ml-btn',
    button_caption: 'Open Media Library',
    insert_transformation: true
  }
  window.mlWidget = window.cloudinary.createMediaLibrary(
    config,
    {
      insertHandler: data => {
        data.assets.forEach(asset => {
          console.log('Inserted asset:', JSON.stringify(asset, null, 1))
        })
      }
    },
    '#ml-button'
  )
}
