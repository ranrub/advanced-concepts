require('dotenv').config()
const cloudinary = require('cloudinary').v2

function destroyAsset(asset) {
  console.log('destory asset', asset)
  cloudinary.uploader
    .destroy(asset.public_id, {
      sign_url: true,
      type: `${asset.type ? asset.type : 'upload'}`,
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
  { public_id: 'dolphin', resource_type: 'image', type: 'authenticated' },
  { public_id: 'goldfish', resource_type: 'image', type: 'private' },
  { public_id: 'killer-whale', resource_type: 'image' },
  { public_id: 'shark', resource_type: 'image' },
  { public_id: 'cc0', resource_type: 'image' },
  {
    public_id: 'https://cloudinary-training.github.io/advanced-concepts/assets/images/oranges.jpg',
    resource_type: 'image',
    type: 'fetch'
  },
  { public_id: 'remote-media/images/pineapple', resource_type: 'image' },
  { public_id: 'remote-media/raw/data.json', resource_type: 'raw' },
  { public_id: 'remote-media/video/rooster', resource_type: 'rooster' },
  { public_id: 'cremote-images/kiwi', resource_type: 'image' },
  { public_id: 'remote-media-secure/cherries', resource_type: 'image' }
]

const fetchedAssets = [
  {
    public_id: 'https://cloudinary-training.github.io/advanced-concepts/assets/images/oranges.jpg',
    resource_type: 'image',
    type: 'fetch'
  }
]
// const publicIds = assets.map(item => item.public_id)
// console.log(publicIds)
// deletePublicIds(publicIds)

for (const asset of assets) {
  destroyAsset(asset)
}
// for (const asset of fetchedAssets) {
//   destroyAsset(asset)
// }
// destroyAsset(fetchedAssets[0])
