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




window.onload=init;
function init(){
    bloqueRGPD = document.querySelector('.cajacookies');
    if (localStorage.decodedCookie != 'true') {
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
    localStorage.decodedCookie = 'true';
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

const noti = document.querySelectorAll(".not-1");
const botona = document.querySelector(".not-a");
const botonb = document.querySelector(".not-b");
const botonc = document.querySelector(".not-c");
console.log(noti);
noti[1].style.display = "none";
noti[2].style.display = "none";

// const carousel = new bootstrap.Carousel('#myCarousel');

function notice() {
    for (i=0;i<noti.length;i++) {
        noti[i].style.display = "none";
        
    }

    n++;
    if(n>noti.length){n=1};
    noti[n-1].style.display = "block";
    if(noti[n-1]==noti[0]) {
        botona.style.opacity = "1";
        botonb.style.opacity = "0.3";
        botonc.style.opacity = "0.3";
        }else if (noti[n-1]==noti[1]) {
            botonb.style.opacity = "1";
            botona.style.opacity = "0.3";
            botonc.style.opacity = "0.3";
        } else {
            botonc.style.opacity = "1";
            botona.style.opacity = "0.3";
            botonb.style.opacity = "0.3";
        }
    
};

let time = setInterval(notice,10000);

botona.addEventListener('click',() => {
    botona.style.opacity = "1";
    botonb.style.opacity = "0.3";
    botonc.style.opacity = "0.3";
    if(true) {
    noti[0].style.display = "block";
    noti[1].style.display = "none";
    noti[2].style.display = "none";
    clearInterval(time);
    } 
});

botonb.addEventListener('click',() => {
    botona.style.opacity = "0.3";
    botonc.style.opacity = "0.3";
    botonb.style.opacity = "1";
    if(true) {
    noti[0].style.display = "none";
    noti[1].style.display = "block";
    noti[2].style.display = "none";
    clearInterval(time);
    } 
});

botonc.addEventListener('click',() => {
    botonc.style.opacity = "1";
    botona.style.opacity = "0.3";
    botonb.style.opacity = "0.3";
    if(true) {
    noti[0].style.display = "none";
    noti[1].style.display = "none";
    noti[2].style.display = "block";
    clearInterval(time);
    } 
});

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