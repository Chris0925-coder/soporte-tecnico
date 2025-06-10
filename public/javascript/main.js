const bloqueRGPD = document.querySelector('.cajacookies');
const botonRGPD = document.querySelector(".botonRGPD");
const url = `https://wvlhqwzk-5000.use2.devtunnels.ms/analytics`;
const cancel = document.querySelector(".botonRGPD--cancel");

const navBoton = document.querySelector(".navbar-toggler");
const navLink = document.querySelector(".off");
const close = document.querySelector(".btn-close");


navBoton.addEventListener('click', () => {
    navLink.classList.toggle("hidden-nav");
});

close.addEventListener('click', () => {
    navLink.classList.toggle("hidden-nav");
});

function setCookie(cname, cvalue, exdays) {
    let d = new Date();

    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function removeCookie(cname){
    setCookie(cname,"",-1);
};

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function detectCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0 && (name.length != c.length))  {
            return true;
        }
    }
    return false;
};

// function ready() {
init();

    // alert('DOM is ready');

    // la imagen aún no está cargada (a menos que se haya almacenado en caché), por lo que el tamaño es 0x0
    // alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
// }

// document.addEventListener("DOMContentLoaded", ready);

const dominio = window.location.origin;
let d = localStorage.getItem("acceptedCookies");
function count(a) {

    if(a) {
        let analyticsData = {
            id: 1,
            count: 1,
            domain: dominio,
        };

        window.addEventListener("load", function() {
          navigator.sendBeacon(url, JSON.stringify(analyticsData));
        });

    }
}
count(d);

// $(document).ready(function() {
    // });
    // window.addEventListener('load',(event) => {
    //     console.log(event)
    // });

function init(){
    if (localStorage.acceptedCookies != "true") {
        bloqueRGPD.style.display = 'block';    
    }

    cancel.addEventListener("click", () => {
        removeCookie();
        bloqueRGPD.parentNode.removeChild(bloqueRGPD);
        localStorage.acceptedCookies = 'false';
        history.back();
    });

    botonRGPD.addEventListener("click", () => {
        // console.log(botonRGPD);
        navigator.sendBeacon(url, JSON.stringify({
                id: 1,
                count: 1,
                domain: dominio,
            }));
        eliminarBloqueRGPD();
    });
};

function eliminarBloqueRGPD(){
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
    localStorage.acceptedCookies = 'true';

    setCookie("rgpdOK",1,365);
};

let n = 0;
let o = 0;


const noti = document.querySelectorAll(".not-1");
const slideA = document.querySelectorAll(".carousel-item");
const botona = document.querySelector(".not-a");
const botonb = document.querySelector(".not-b");
const botonc = document.querySelector(".not-c");
const botond = document.querySelector(".not-d");
const sliderButtoms = document.getElementsByClassName("carousel-indicators");

noti[1].style.display = "none";
noti[2].style.display = "none";
noti[3].style.display = "none";
slideA[1].style.display = "none";
slideA[2].style.display = "none";
slideA[3].style.display = "none";

function sildeButtoms(a, b, c, d) {
        a.style.opacity = "1";
        b.style.opacity = ".3";
        c.style.opacity = ".3";
        d.style.opacity = ".3";
}

function sildeDisplay(a, b, c, d) {
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
}


function notice(a) {
    // n = 0;
    for (i=0;i<a.length;i++) {
        a[i].style.display = "none";
    }
    o++;
    if(o>a.length){o=1};
    a[o-1].style.display = "block";

    if(a[o-1]==a[0]) {
        sildeButtoms(sliderButtoms[0].children[0], sliderButtoms[0].children[1], sliderButtoms[0].children[2], sliderButtoms[0].children[3]);
        } else if (a[o-1]==a[1]) {
            sildeButtoms(sliderButtoms[0].children[1], sliderButtoms[0].children[0], sliderButtoms[0].children[2], sliderButtoms[0].children[3]);
        } else if (a[o-1]==a[2]) {
            sildeButtoms(sliderButtoms[0].children[2], sliderButtoms[0].children[1], sliderButtoms[0].children[0], sliderButtoms[0].children[3]);
        } else {
            sildeButtoms(sliderButtoms[0].children[3], sliderButtoms[0].children[1], sliderButtoms[0].children[2], sliderButtoms[0].children[0]);
    }
};


function notic(a) {
    // n = 0;
    for (i=0;i<a.length;i++) {
        a[i].style.display = "none";
    }
    n++;
    if(n>a.length){n=1};
    a[n-1].style.display = "block";

    if(a[n-1]==a[0]) {
        sildeButtoms(botona, botonb, botonc, botond)
        } else if (a[n-1]==a[1]) {
            sildeButtoms(botonb, botona, botonc, botond)
        } else if (a[n-1]==a[2]) {
            sildeButtoms(botonc, botonb, botona, botond)
        } else {
            sildeButtoms(botond, botonb, botonc, botona)
    }
};

let time = setInterval(notic, 7000, noti);
let timeA = setInterval(notice, 9000, slideA);

function fadeB(a) {
    a.addEventListener('click',() => {  
        if(a == botona) {
            sildeButtoms(botona, botonb, botonc, botond);
            sildeDisplay(noti[0], noti[1], noti[2], noti[3]);
            clearInterval(time);
        } else if (a == botonb){
            sildeButtoms(botonb, botona, botonc, botond);
            sildeDisplay(noti[1], noti[0], noti[2], noti[3]);
            clearInterval(time);
        } else if (a == botonc){
            sildeButtoms(botonc, botonb, botona, botond);
            sildeDisplay(noti[2], noti[1], noti[0], noti[3]);
            clearInterval(time);
        } else if (a==botond){
            sildeButtoms(botond, botonb, botonc, botona);
            sildeDisplay(noti[3], noti[1], noti[2], noti[0]);
            clearInterval(time);
        }
        else if (a == sliderButtoms[0].children[0]) {
            sildeButtoms(sliderButtoms[0].children[0], sliderButtoms[0].children[1], sliderButtoms[0].children[2], sliderButtoms[0].children[3]);
            sildeDisplay(slideA[0], slideA[1], slideA[2], slideA[3]);
            clearInterval(timeA);
        } else if (a == sliderButtoms[0].children[1]){
            sildeButtoms(sliderButtoms[0].children[1], sliderButtoms[0].children[0], sliderButtoms[0].children[2], sliderButtoms[0].children[3]);
            sildeDisplay(slideA[1], slideA[0], slideA[2], slideA[3]);
            clearInterval(timeA);
        } else if (a == sliderButtoms[0].children[2]){
            sildeButtoms(sliderButtoms[0].children[2], sliderButtoms[0].children[1], sliderButtoms[0].children[0], sliderButtoms[0].children[3]);
            sildeDisplay(slideA[2], slideA[1], slideA[0], slideA[3]);
            clearInterval(timeA);
        } else {
            sildeButtoms(sliderButtoms[0].children[3], sliderButtoms[0].children[1], sliderButtoms[0].children[2], sliderButtoms[0].children[0]);
            sildeDisplay(slideA[3], slideA[1], slideA[2], slideA[0]);
            clearInterval(timeA);
        }
    });
};

fadeB(botona);
fadeB(botonb);
fadeB(botonc);
fadeB(botond);

fadeB(sliderButtoms[0].children[0]);
fadeB(sliderButtoms[0].children[1]);
fadeB(sliderButtoms[0].children[2]);
fadeB(sliderButtoms[0].children[3]);


const prev = document.querySelector('#previous');
const next = document.querySelector('#next');

let slideIndex = 0;
    
    prev.addEventListener('click', () => {
            for (i = 0; i < slideA.length; i++) {
                slideA[i].style.display = "none";
                sliderButtoms[0].children[i].style.opacity = "0.3";
            }
            slideIndex--;
            if (slideIndex <= 0) {slideIndex = 4};
            sliderButtoms[0].children[slideIndex-1].style.opacity = "1";
            slideA[slideIndex-1].style.display = "block";
            clearInterval(timeA);       
        });

    next.addEventListener('click', () => {
        
        for (i = 0; i < slideA.length; i++) {
            slideA[i].style.display = "none";
            sliderButtoms[0].children[i].style.opacity = "0.3";
        }
        slideIndex++;
        if(slideIndex > slideA.length) {
            slideIndex = 1;
        }
        sliderButtoms[0].children[slideIndex-1].style.opacity = "1";
        slideA[slideIndex-1].style.display = "block";
        clearInterval(timeA);
    });


// window.twttr = (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0],
//       t = window.twttr || {};
//     if (d.getElementById(id)) return t;
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://platform.twitter.com/widgets.js";
//     fjs.parentNode.insertBefore(js, fjs);
  
//     t._e = [];
//     t.ready = function(f) {
//       t._e.push(f);
//     };
//     return t;
//     }(document, "script", "twitter-wjs"));

// twttr.widgets.createTimeline({
//     sourceType: 'profile',
//     screenName 'ChrisWebDev30'
// }, document.getElementById('container'));


// fetch("https://www.youtube.com/embed/w3jrzlAijKA?si=N-ORTZq0Fxzaxrqi")
//     .then(response => {
//         if(!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Fetch error:', error));
// width="560" 
// height="315"
// title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>


const date = document.querySelector('.date');

date.append(new Date ().getFullYear ());

// const inst = document.querySelector('#insta');
// const du = inst.querySelector('.item:nth-child(2)');
// const nd = document.createElement('div');

// let url=`https://graph.instagram.com/v21.0/me/media?fields=username,media_url&access_token=${process.env.TOKEN}`;
// console.log(url);

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
        // console.log(data);
//         nd.innerHTML = `
//             <ul>
//                 <li>${data.data.username}</li>
//                 <li><img src='${data.data.media_url}' width="200" height="300"></li>
//             </ul>`

//     inst.insertBefore(nd, du);

// });



// dataLayer.push({event, "gtm.init_consent", gtm.uniqueEventId: -1


//   event: "scroll",
//     gtm: {
//     uniqueEventId: 11,
//     allowlist: undefined,
//     blocklist: undefined,
//     whitelist: undefined,
//     blacklist: undefined,
//     priorityId: 3,
//     start: 1724540289814,
//     scrollThreshold: 90,
//     scrollUnits: "percent",
//     scrollDirection: "vertical",
//     triggers: "8"
//   },
//   tagTypeBlacklist: undefined,
//   ads_data_redaction: true,
//   eventModel: {percent_scrolled: 90}

// });
// console.log(dataLayer[0]);




// const mockData = {
//   command: 'default',
//   defaultSettings: [
//     {
//       'region':'',
//       'adStorage':'granted',
//       'analyticsStorage':'granted',
//       'functionalityStorage':'granted',
//       'personalizationStorage':'granted',
//       'securityStorage':'granted',
//       'adUserData':'granted',
//       'adPersonalization':'granted',
//     }
//   ],  
// };

// // Call runCode to run the template's code.
// runCode(mockData);

// Verify that the tag finished successfully.
// assertApi('gtmOnSuccess').wasCalled();
// assertApi('setDefaultConsentState').wasCalledWith({
//   ad_storage: 'granted',
//   analytics_storage: 'granted',
//   functionality_storage: 'granted',
//   personalization_storage: 'granted',
//   security_storage: 'granted',
//   ad_user_data: 'granted',
//   ad_personalization: 'granted',
// });


// gtag("set", {ads_data_redaction: true});
// dataLayer.push({event: "gtm.init", gtm.uniqueEventId: 0});
// dataLayer.push({gtm.start: 1724541140150, event: "gtm.js", gtm.uniqueEventId: 1});
// dataLayer.push({event: "gtm.js", gtm.start: 1724541140152, gtm.uniqueEventId: 7, gtm.priorityId: undefined});
// dataLayer.push({event: "gtm.dom", gtm.uniqueEventId: 9});
// dataLayer.push({event: "gtm.load", gtm.uniqueEventId: 10});
// dataLayer.push({
//   event: "gtm.video",
//   gtm.element: "HTMLIFrameElement: html > body > main.demoPage-main > div.YouTube > iframe#player",
//   gtm.elementClasses: "",
//   gtm.elementId: "player",
//   gtm.elementTarget: "",
//   gtm.triggers: "6",
//   gtm.elementUrl: "https://www.youtube.com/embed/w3jrzlAijKA?autoplay=1&loop=1&mute=0&enablejsapi" +
//                   "=1&origin=https%3A%2F%2Fwww.webdev.fun&widgetid=1",
//   gtm.videoProvider: "youtube",
//   gtm.videoStatus: "start",
//   gtm.videoUrl: "https://www.youtube.com/watch?v=w3jrzlAijKA",
//   gtm.videoTitle: "@CATHERINE LO SOÑASTE",
//   gtm.videoDuration: 168,
//   gtm.videoCurrentTime: 0,
//   gtm.videoElapsedTime: 0,
//   gtm.videoPercent: 0,
//   gtm.videoVisible: true,
//   gtm.uniqueEventId: 11
// });
// dataLayer.push({
//   event: "video_start",
//   eventModel: {
//     video_current_time: 0,
//     video_duration: 168,
//     video_percent: 0,
//     video_provider: "youtube",
//     video_title: "@CATHERINE LO SOÑASTE",
//     video_url: "https://www.youtube.com/watch?v=w3jrzlAijKA",
//     visible: true
//   },
//   gtm.uniqueEventId: 11,
//   gtm.priorityId: 3
// });
// dataLayer.push({
//   event: "gtm.video",
//   gtm.element: "HTMLIFrameElement: html > body > main.demoPage-main > div.YouTube > iframe#player",
//   gtm.elementClasses: "",
//   gtm.elementId: "player",
//   gtm.elementTarget: "",
//   gtm.triggers: "6",
//   gtm.elementUrl: "https://www.youtube.com/embed/w3jrzlAijKA?autoplay=1&loop=1&mute=0&enablejsapi" +
//                   "=1&origin=https%3A%2F%2Fwww.webdev.fun&widgetid=1",
//   gtm.videoProvider: "youtube",
//   gtm.videoStatus: "progress",
//   gtm.videoUrl: "",
//   gtm.videoTitle: "",
//   gtm.videoDuration: 0,
//   gtm.videoCurrentTime: 0,
//   gtm.videoElapsedTime: 0,
//   gtm.videoPercent: 10,
//   gtm.videoVisible: false,
//   gtm.uniqueEventId: 12
// });
// dataLayer.push({
//   event: "video_progress",
//   eventModel: {
//     video_current_time: 0,
//     video_duration: 0,
//     video_percent: 10,
//     video_provider: "youtube",
//     video_title: "",
//     video_url: "",
//     visible: false
//   },
//   gtm.uniqueEventId: 12,
//   gtm.priorityId: 4
// });

const pImgs = document.querySelectorAll('.proyectA-imgs');

const pImgsB = document.querySelectorAll('.proyectB-imgs');

cp = 0;

cp2 = 0;

// console.log(pImgs);

function sliderP(a) {
    for (let i=0;i<a.length;i++) {
        a[i].style.display = "none";
    }
    cp++;
    if(cp>a.length){cp=1};
    a[cp-1].style.display = "block";
}

function sliderO(a) {
    for (let i=0;i<a.length;i++) {
        a[i].style.display = "none";
    }
    cp2++;
    if(cp2>a.length){cp2=1};
    a[cp2-1].style.display = "block";
}


// sliderP(pImgs);
// sliderP(pImgsB, cp2);


setInterval(sliderP, 7000, pImgs);

setInterval(sliderO, 10000, pImgsB);
// setInterval(BB, 5000);
// setInterval(sliderP, 5000);
// sliderP(pImgsB)
