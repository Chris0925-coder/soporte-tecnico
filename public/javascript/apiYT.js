
const youTube = document.querySelector('.YouTube');
// const tag = document.createElement('script');
// const tag = youTube.querySelector('.item:child-nth(2)');
// const figure = document.createElement('div');


// document.querySelector(".botonRGPD").addEventListener("click", () => {

    // tag.src = "https://www.youtube.com/iframe_api";
    // youTube.innerHTML = `<figure><img src='public/img/influencers/femmes.jpg'></figure>`;
    // let firstScriptTag = youTube.getElementsByTagName('figure')[0];
    // youTube.parentNode.insertBefore(tag,figure);

    // youTube.insertBefore(figure, tag)
// });
var femmes = localStorage.getItem("video");
console.log(femmes)


    function onYouTubeIframeAPIReady() {
        // player = new YT.Player('player', {
        //   height: '300',
        //   width: '640',
        //   videoId: 'OfjqZVz5dRg',
        //   playerVars: {
        //   'autoplay': 1,
        //   'loop': 0,
        //   'mute': 1
        //   },
        //   events: {
        //     'onReady': onPlayerReady,
        //     'onStateChange': onPlayerStateChange
        //   }
        // });
        if (!femmes) {
        youTube.innerHTML = `<h3>Feliz Noviembre Panamá</h3><div class="closeqA">X</div><figure><img src='public/img/influencers/femmesC.jpg'><img src='public/img/influencers/femmesE.jpg'></figure>`;
        } else {
            youTube.style.display = "none";
        }
        // youTube.style.opacity = "1";
        // youTube.style.transition = "all 3s ease-in-out";
        // youTube.style.width = "";
        // youTube.style.height = "80vh";
        // closeY.style.display = 'flex';
        // closeY.style.color = '#fff';
        // closeY.style.opacity = '1';
        // closeY.style.transition = "all .5s ease-in-out";
    };

            
        onYouTubeIframeAPIReady();

const closeY = document.querySelector('.closeqA');
    // function onPlayerReady(event) {
    //     event.target.playVideo();
    // }

    var done = false;

    // function onPlayerStateChange(event) {
    //     if (event.data == YT.PlayerState.PLAYING && !done) {
    //         setTimeout(stopVideo, 120000);
    //         done = true;
    //     }
    // };

    closeY.addEventListener('click', () => {

        // stopVideo();

        youTube.style.display = "none";
        closeY.style.display = 'none';
        youTube.innerHTML = '';
        done = true;
        localStorage.setItem('video', done);
        
    });

    // function stopVideo() {
    //     player.stopVideo();
    //     done = true;
        
    // }
