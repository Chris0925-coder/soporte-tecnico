
const youTube = document.querySelector('.YouTube');
const tag = document.createElement('script');
const closeY = document.querySelector('.closeqA');
const cancel=document.querySelector(".botonRGPD__cancel");

cancel.addEventListener('click', () => {
    gtag("consent", "default", {
      'ad_storage': "denied",
      'analytics_storage': "denied",
      'functionality_storage': "denied",
      'personalization_storage': "denied",
      'security_storage': "denied",
      'ad_user_data': "denied",
      'ad_personalization': "denied",
      'wait_for_update': "500"
    });
    window.history.back();
});
document.querySelector(".botonRGPD").addEventListener("click", () => {
    gtag("consent", "update", {
              'ad_storage': "granted",
              'analytics_storage': "granted",
              'functionality_storage': "granted",
              'personalization_storage': "granted",
              'security_storage': "granted",
              'ad_user_data': "granted",
              'ad_personalization': "granted",
              'wait_for_update': "500"
            });

    gtag("set", {ads_data_redaction: true});
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = youTube.getElementsByTagName('script')[0];
    youTube.parentNode.insertBefore(tag, firstScriptTag);
});


    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '300',
          width: '640',
          videoId: 'OfjqZVz5dRg',
          playerVars: {
          'autoplay': 1,
          'loop': 0,
          'mute': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        
        youTube.style.opacity = "1";
        youTube.style.transition = "all 3s ease-in-out";
        closeY.style.display = 'flex';
        closeY.style.color = '#8b0000';
        closeY.style.opacity = '1';
        closeY.style.transition = "all .5s ease-in-out";
    };

    function onPlayerReady(event) {
        // event.target.setVolume(100);
        event.target.playVideo();
    }

    var done = false;

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 120000);
            done = true;
        }
    };

    closeY.addEventListener('click', () => {

        stopVideo();

        youTube.style.display = "none";
        closeY.style.display = 'none';
        tag.innerHTML = '';
        
    });

    function stopVideo() {
        player.stopVideo();
        done = true;
        localStorage.setItem('video', done);
    }