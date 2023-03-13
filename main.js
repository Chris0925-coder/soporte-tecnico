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

// function thumnail() {

//     for (i = 0; i < carusel.length; i++) {
//     caruselItem.style.backgroundImage = carusel[i];
//     };

//     slideThumnail++;

//     if(slideThumnail > carusel.length) {slideThumnail = 1};
//     caruselItem.style.backgroundImage = carusel[slideThumnail-1];

//     setTimeout(thumnail,6000);
// };
// thumnail();


console.log(carusel[0]);


caruselItem.addEventListener('touchstart', () => {
    // thumnail();
    for (i = 0; i < carusel.length; i++) {
    caruselItem.style.backgroundImage = `url(${carusel[i]})`;
    };

    slideThumnail++;

    if(slideThumnail > carusel.length) {slideThumnail = 1};
    caruselItem.style.backgroundImage = `url(${carusel[slideThumnail-1]})`;

    setTimeout(carusel, 8000);
    // caruselItem.classList.toggle(`url(${carusel[0]})`);
    // caruselItem.style.backgroundImage = carusel;
});