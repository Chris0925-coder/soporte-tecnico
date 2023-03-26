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

let slideThumnail = 0;
const navToggle = document.querySelector(".navbar-toggler")
const navLink = document.querySelector(".navbar-nav")

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
});

let caruselItem = document.querySelector('.carousel-item');
let galeria = document.querySelector('.galeria');



const carusel = [
    'img/control.jpg',
    'img/control2.jpg',
    'img/ps4Pro.jpg',
    'img/ps4Pro2.jpg'
];

function thumnail() {

    for (i = 0; i < carusel.length; i++) {
    caruselItem.style.backgroundImage = `url(${carusel[i]})`;
    };

    slideThumnail++;

    if(slideThumnail > carusel.length) {slideThumnail = 1};
    caruselItem.style.backgroundImage = `url(${carusel[slideThumnail-1]})`;

    setTimeout(thumnail, 8000);
    // caruselItem.classList.toggle(`url(${carusel[0]})`);
    // caruselItem.style.backgroundImage = carusel;
};
thumnail();


console.log(carusel[0]);


caruselItem.addEventListener('touchstart', () => {
    // thumnail();
    clearTimeout(thumnail);
    for (i = 0; i < carusel.length; i++) {
    caruselItem.style.backgroundImage = `url(${carusel[i]})`;
    };

    
});


const galeria2 = document.querySelector('.galeria2');
const carousel = [
    'img/lap01.jpeg',
    'img/lap02.jpeg',
    'img/lap03.jpeg',
    'img/lap04.jpeg',
    'img/xbox04.jpeg',
    'img/xbox05.jpeg'
];

let slideIndex = 0;

galeria2.addEventListener('click', () => {
    // let i = 0;
    // galeria2
    // galeria2.style.backgroundImage = `url(${carusel2[i]})`;
    for (i = 0; i < carousel.length; i++) {
        galeria2.style.backgroundImage = `url(${carousel[i]})`;
        // galeria2.style.display = "none";
    };
    
    slideIndex++;
 
    if(slideIndex > carousel.length) {slideIndex = 1};
    galeria2.style.backgroundImage = `url(${carousel[slideIndex-1]})`;
    // galeria2[slideIndex-1].style.display = "flex";   
});