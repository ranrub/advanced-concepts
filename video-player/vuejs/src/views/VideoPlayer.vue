<template>
  <div>
    <h3>Video Player</h3>
    <video id='demo-player' width="500" class='cld-video-player'></video>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  // components: {},
  mounted: function() {
    console.log('mounted');
    /*global cloudinary - cloudinary JS SDK*/
    /*eslint no-undef: 'error'*/
    var cld = cloudinary.Cloudinary.new({
      cloud_name: 'cloudinary-training'
    });
    // video play object
    const demoplayer = cld.videoPlayer('demo-player', {
      autoplay: false,
      muted: true,
      controls: true,
      transformation: [
        { width: 500, crop: 'fit' },
        {
          overlay: 'video-logo',
          width: 100,
          gravity: 'north_east',
          x: 5,
          y: 5,
          opacity: 70
        }
      ]
    });
    demoplayer.source('rooster')
  }
};
</script>

<style>
</style>

