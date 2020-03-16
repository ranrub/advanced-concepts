require('dotenv').config()
const cloudinary = require('cloudinary').v2

function destroyAsset(asset) {
  cloudinary.uploader
    .destroy(asset.public_id, {
      resource_type: asset.resource_type
    })
    .then(result => {
      console.log('removing: ', asset.public_id)
      console.log(result)
    })
    .catch(error => console.error(error))
}

function deletePublicIds(publicIds) {
  cloudinary.api
    .delete_resources(publicIds)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))
}

const assets = [
  { public_id: 'jellyfish', resource_type: 'image' },
  { public_id: 'koi', resource_type: 'image' },
  { public_id: 'dolphin', resource_type: 'image' },
  { public_id: 'killer-whale', resource_type: 'image' },
  { public_id: 'shark', resource_type: 'image' },
  { public_id: 'cc0', resource_type: 'image' },
  {
    public_id: 'advanced-concepts/assets/images/oranges.jpg',
    resource_type: 'image'
  },
  { public_id: 'remote-media/images/pineapple', resource_type: 'image' },
  { public_id: 'remote-media/raw/data.json', resource_type: 'raw' },
  { public_id: 'remote-media/video/rooster', resource_type: 'rooster' },
  { public_id: 'cremote-images/kiwi', resource_type: 'image' },
  { public_id: 'remote-media-secure/cherries', resource_type: 'image' }
]
const publicIds = assets.map(item => item.public_id)
console.log(publicIds)
deletePublicIds(publicIds)

// how to delete fetched item, private, authenticated item
// how to delete directories