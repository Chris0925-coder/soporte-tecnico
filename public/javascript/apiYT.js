const youTube = document.querySelector('.YouTube');
// const yy = youTube.querySelector('.item:nth-child(2)');
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = youTube.getElementsByTagName('script')[0];
      // const youTube = firstScriptTag.querySelector('.item:nth-child(2)');
      youTube.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'w3jrzlAijKA',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 24000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}


// ADSYOUTUBE

// const youTube = document.querySelector('.YouTube');
// const yy = youTube.querySelector('.item:nth-child(2)');
const closeY = document.querySelector('.closeqA');
// let newDiv = document.createElement('div');

// newDiv.innerHTML =`
//     <iframe width="420" height="315" src="https://www.youtube.com/embed/8dQn741XzLA?si=VBITf0z9-o5m0NVM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;


function youT() {
        youTube.style.opacity = "1";
        youTube.style.transition = "all 3s ease-in-out";
        closeY.style.display = 'flex';
        closeY.style.color = '#8b0000';
        closeY.style.opacity = '1';
        closeY.style.transition = "all .5s ease-in-out";
        // onPlayerReady;
        // playVideo();
    }

youT();

closeY.addEventListener('click', () => {
    youTube.style.display = "none";
    closeY.style.display = 'none';
    // tag.innerHTML = '';
    stopVideo();
})

// youTube.insertBefore(newDiv, yy);

// ADSYOUTUBE



// const url = "https://graph.facebook.com/v19.0/me?fields=id,email,name,picture{url,is_silhouette},posts{permalink_url}&access_token=";
// const showNews = document.getElementById('news-api');
// const showPost = document.getElementById('posts-api');
// fetch(url).then((resp) => resp.json()).then(dato => {

//     const img = dato.picture.data.url;
//     const name = dato.name;
//     const email = dato.email;
//     const post = dato.posts.data[3].permalink_url;
//     let news = (dato.posts.data);
//     news.map(function(num){

//         showPost.innerHTML = `
//                             <div></div><iframe src="${num}" width="500" height="604" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`;
//     });

//     showNews.innerHTML = `<div><img src="${img}"></div><br>
//                             <h2>${name}</h2><br>
//                             <h3>${email}</h3><br>
//                             <div><iframe src="${post}" width="500" height="604" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>`;
    // let news = (dato.articles);permalink_url
    // news.map(function(num){
    //  let div = document.createElement('news');
    //  div.innerHTML = `<br>
    //                  <img style="max-witdh:600px" src=${num.urlToImage}><br>
    //                  <h1>${num.title}</h1>
    //                  <h2>${num.description}</h2>
    //                  <h3>${num.url}</h3>`;

    // showNews.appendChild(div);
    // }) 
// });



// function sumar (a,b) {
//     return a + b;
// }

// const result = sumar();

// console.log(result === NaN);