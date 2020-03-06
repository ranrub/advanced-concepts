require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.uploader
  .upload('assets/images/shell.jpg', {
    categorization: 'aws_rek_tagging',
    auto_tagging: 0.85
  })
  .then(uploadResult => {
    console.log(uploadResult)
    // console.log(uploadResult.info.categorization.aws_rek_tagging)
    const rekTags = uploadResult.info.categorization.aws_rek_tagging.data.filter(
      item => item.confidence > 0.85
    )
    const alt = rekTags.map(item => item.tag).join(',')
    console.log('rekTags', rekTags)
    if (rekTags) {
      cloudinary.uploader
        .explicit(uploadResult.public_id, {
          type: 'upload',
          context: `alt=${alt}`
        })
        .then(result => console.log(result))
        .catch(error => console.error(error))
    }
  })
  .catch(error => console.error(error))
