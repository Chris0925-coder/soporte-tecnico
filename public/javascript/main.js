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

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";path=/contacto.html";
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
        console.log(c);
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


// $(document).ready(function() {
//     init();
// });

function init(){
    bloqueRGPD = document.querySelector('.cajacookies');
    if (localStorage.acceptedCookies != 'true') {
    bloqueRGPD.style.display = 'block';    
    }

    if(detectCookie("rgpdOK")){
        if (getCookie("rgpdOK")==1){eliminarBloqueRGPD();}
    }else{

        document.querySelector(".botonRGPD__cancel").addEventListener("click", () => {
            removeCookie();
            bloqueRGPD.parentNode.removeChild(bloqueRGPD);
            localStorage.acceptedCookies = 'false';
        });

        document.querySelector(".botonRGPD").addEventListener("click", () => {
            eliminarBloqueRGPD();
            setCookie("rgpdOK",1,365);
        });

        // document.querySelector(".botonRGPD__settings").addEventListener("click", () => {
        //     getCookie();
        // });
    }
};

$(document).ready(function() {
    init();
});

function eliminarBloqueRGPD(){
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
    localStorage.acceptedCookies = 'true';
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
