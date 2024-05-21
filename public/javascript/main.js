// $('body').animate({'opacity': '1'}, 2000);
// document.addEventListener('DOMContentLoaded', () => {
//     const elementosCarousel = document.querySelectorAll('.carousel');
//     MIDIAccess.Carousel.init(elementosCarousel, {
//         duration: 150,
//         dist: -80,
//         shift: 5,
//         padding: 5,
//         numVisible: 3,
// .        indicators: true,
//         noWrap: true
//     });
// });

// let slideThumnail = 0;
// let slideThumnail2 = 0;

// const navToggle = document.querySelector(".navbar-toggler")
// const navLink = document.querySelector(".navbar-nav")

// navToggle.addEventListener("click", () => {
//     navLink.classList.toggle("navbar-nav_visible")
// });

// let caruselItem = document.querySelector('.carousel-item2');
// let galeria = document.querySelector('.galeria');
// const cajacookies = document.querySelector('.cajacookies');
// const cookieAccepted = document.cookies;
// console.log(aceptaCookies);
// localStorage.cookieAccepted === true;
// localStorage.cookieAccepted === true;

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
    for(let i = 0; i <ca.length; i++) {
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


$(document).ready(function() {
    init();
});

function init(){
    bloqueRGPD = document.querySelector('.cajacookies');
    if (localStorage.acceptedCookies != 'true') {
    bloqueRGPD.style.display = 'block';    
    }

    if(detectCookie("rgpdOK")){
        if (getCookie("rgpdOK")==1){eliminarBloqueRGPD();}
    }else{
        document.querySelector(".botonRGPD").addEventListener("click", () => {
        eliminarBloqueRGPD();
        setCookie("rgpdOK",1,365);
        })        
    }
};

function eliminarBloqueRGPD(){
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
    localStorage.acceptedCookies = 'true';
};







// function compruebaAceptaCookies() {
//     if (localStorage.cookieAccepted === true) {
//     } else {
//         window.history.go(-1);
//         window.close();
//         window.open("https://www.google.com/", "_self");
//     }
// };

// function aceptarCookies() {
//     localStorage.cookieAccepted === true;

// };

// $(document).ready(function() {
//     compruebaAceptaCookies();
// });


// const carusel = [
//     'img/newd.jpeg',
//     'img/OIP.jfif',
//     'img/ps4Pro.jpg',
//     'img/ps4Pro2.jpg'
// ];

// function thumnail() {
    
//     for (i = 0; i < carusel.length; i++) {
//         caruselItem.style.backgroundImage = `url(${carusel[i]})`;
        
//     };

//     slideThumnail++;
//     slideThumnail2++;

//     if(slideThumnail > carusel.length) {slideThumnail = 1};
//     if(slideThumnail > carusel.length) {
//         slideThumnail2 = 1;
         
        
//     };
//     caruselItem.style.backgroundImage = `url(${carusel[slideThumnail-1]})`;
//   if (carusel[slideThumnail-1] == "img/OIP.jfif") {
//             let info = "<p class='jsSlider'>Node.js, JavaScript, SQLite. Base de datos a un click.</p>";
//             let p = document.createElement("figcaption");
//             p = info;
       
//             caruselItem.innerHTML=p;

//         } else if (carusel[slideThumnail-1] == "img/newd.jpeg") {
//             let p = document.createElement("figcaption");
//             let info1 = "<p class='jsSlider'>Reparación, mantenimiento, limpieza...</p>";
            
//             p = info1;
//              caruselItem.innerHTML=p;
//         } else if (carusel[slideThumnail-1] == "img/ps4Pro.jpg") {
//             let p = document.createElement("figcaption");
//             let info2 = "<p class='jsSlider'>Renueva pasta térmica, PS4Pro.</p>";
            
//             p = info2;
//              caruselItem.innerHTML=p;
//         }
//         else {
//             caruselItem.innerHTML="<p class='jsSlider'>Limpieza, consola de Video Juegos.</p>";
//         }
//     setTimeout(thumnail, 8000);


// };
// thumnail();




// caruselItem.addEventListener('touchstart', () => {
//     clearTimeout(thumnail);
//     for (i = 0; i < carusel.length; i++) {
//     caruselItem.style.backgroundImage = `url(${carusel[i]})`;
//     };

    
// });


// const galeria2 = document.querySelector('.galeria2');
// const photos = document.getElementsByClassName('photo');
// const carousel = [
//     'img/newg.jpeg',
//     'img/lap02.jpeg',
//     'img/lap03.jpeg',
//     'img/lap04.jpeg',
//     'img/xbox04.jpeg',
//     'img/xbox05.jpeg'
// ];

// let slideIndex = 0;

// galeria2.addEventListener('click', () => {
//   for (i = 0; i < carousel.length; i++) {
//         photos[i].style.display = "none";
//         galeria2.style.backgroundImage = `url(${carousel[i]})`;
//     };

//     slideIndex++;
 
//     if(slideIndex > carousel.length) {slideIndex = 1};
//     galeria2.style.backgroundImage = `url(${carousel[slideIndex-1]})`;
// });

let n = 0;
let o = 0;


const noti = document.querySelectorAll(".not-1");
const slideA = document.querySelectorAll(".carousel-item");
const botona = document.querySelector(".not-a");
const botonb = document.querySelector(".not-b");
const botonc = document.querySelector(".not-c");
const botond = document.querySelector(".not-d");
const sliderButtoms = document.getElementsByClassName("carousel-indicators");
// console.log(sliderButtoms);
// console.log(slideA.length);
noti[1].style.display = "none";
noti[2].style.display = "none";
noti[3].style.display = "none";
slideA[1].style.display = "none";
slideA[2].style.display = "none";
slideA[3].style.display = "none";

// const carousel = new bootstrap.Carousel('#myCarousel');

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

// [0].children[0]

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

// notice(slideA, n);
// let time = notice(noti);
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
    // let slideIndexB = 2;
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
// botonb.addEventListener('click',() => {
//     sildeButtoms(botonb, botona, botonc, botond);
//     if(true) {
//         sildeDisplay(noti[1], noti[0], noti[2], noti[3]);
//         clearInterval(time);
//     } 
// });

// botonc.addEventListener('click',() => {
//     sildeButtoms(botonc, botona, botonb, botond);
//     if(true) {
//         sildeDisplay(noti[2], noti[1], noti[0], noti[3]);
//         clearInterval(time);
//     } 
// });


// botond.addEventListener('click',() => {
//     sildeButtoms(botond, botona, botonc, botonb)
//     if(true) {
//         sildeDisplay(noti[3], noti[0], noti[2], noti[1]);
//         clearInterval(time);
//     } 
// });




// counter = parseInt('0');


// const app = Vue.createApp({
//   data() {
//     return {
//       counter: localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0,
//     };
//   },
//   watch: {
//     counter(newQuestion, oldQuestion){
//       localStorage.setItem('count', newQuestion)
//     }
//   },
// }).mount('#app');


const date = document.querySelector('.date');

date.append(new Date ().getFullYear ());





const youTube = document.querySelector('.YouTube');
const yy = youTube.querySelector('.item:nth-child(2)');
const closeY = document.querySelector('.closeq');
let newDiv = document.createElement('div');

newDiv.innerHTML =`
    <iframe width="420" height="315" src="https://www.youtube.com/embed/8dQn741XzLA?si=VBITf0z9-o5m0NVM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;


// youTube.innerHTML = videoC;
    // youTube.appendChild(newDiv, yy);
youTube.insertBefore(newDiv, yy);
function youT() {
        youTube.style.opacity = "1";
        youTube.style.transition = "all 5s ease-in-out";
        closeY.style.display = 'flex';
        closeY.style.color = '#ffffff90';
        closeY.style.opacity = '1';
        closeY.style.transition = "all 5s ease-in-out";
}

youT();

closeY.addEventListener('click', () => {
    youTube.style.display = "none";
    closeY.style.display = 'none';
})





const url = "https://graph.facebook.com/v19.0/me?fields=id,email,name,picture{url,is_silhouette},posts{permalink_url}&access_token=EAAEXhNvjEHcBO7pegKOGqDZA2YONup4ZBNZAQVvQe79DyVvCUNyruMzH3pXf7WMLC2TI1ZBbtzVcqQ4XL4aMZBRxyr478SYZCeTyxrN1xWFfMG0tKWsFpCWqTNHtcowdeIUjizmCkkfVWXj0JDxpv7ZBMDO2C2kEuFUpEH1lfExnzYPX6HFnm7B7vCYWwj1CL0BXgw7fS8HeHOuoyH2MPdnztZAresd3iZCUtpY2kCRKZAWwG8pYMxEVcnF7QpN0pM";
const showNews = document.getElementById('news-api');
const showPost = document.getElementById('posts-api');
fetch(url).then((resp) => resp.json()).then(dato => {
    console.log(dato);
    const img = dato.picture.data.url;
    const name = dato.name;
    const email = dato.email;
    const post = dato.posts.data[3].permalink_url;
    let news = (dato.posts.data);
    news.map(function(num){
        console.log(num);
        // console.log(num);
        showPost.innerHTML = `
                            <div></div><iframe src="${num}" width="500" height="604" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`;
    });
    console.log(post);
    showNews.innerHTML = `<div><img src="${img}"></div><br>
                            <h2>${name}</h2><br>
                            <h3>${email}</h3><br>
                            <div><iframe src="${post}" width="500" height="604" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>`;
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
});