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
let slideThumnail2 = 0;

const navToggle = document.querySelector(".navbar-toggler")
const navLink = document.querySelector(".navbar-nav")

navToggle.addEventListener("click", () => {
    navLink.classList.toggle("navbar-nav_visible")
});

let caruselItem = document.querySelector('.carousel-item2');
let galeria = document.querySelector('.galeria');



const carusel = [
    'img/newd.jpeg',
    'img/OIP.jfif',
    'img/ps4Pro.jpg',
    'img/ps4Pro2.jpg'
];

function thumnail() {
    
    for (i = 0; i < carusel.length; i++) {
        caruselItem.style.backgroundImage = `url(${carusel[i]})`;
        
    };

    slideThumnail++;
    slideThumnail2++;

    if(slideThumnail > carusel.length) {slideThumnail = 1};
    if(slideThumnail > carusel.length) {
        slideThumnail2 = 1;
         
        
    };
    caruselItem.style.backgroundImage = `url(${carusel[slideThumnail-1]})`;
   // console.log(carusel[slideThumnail-1]);
    if (carusel[slideThumnail-1] == "img/OIP.jfif") {
            let info = "<p class='jsSlider'>Node.js, JavaScript, SQLite. Base de datos a un click.</p>";
            let p = document.createElement("figcaption");
            p = info;
            // caruselItem = p;
            
            caruselItem.innerHTML=p;

        } else if (carusel[slideThumnail-1] == "img/newd.jpeg") {
            let p = document.createElement("figcaption");
            let info1 = "<p class='jsSlider'>Reparación, mantenimiento, limpieza...</p>";
            
            p = info1;
             caruselItem.innerHTML=p;
        } else if (carusel[slideThumnail-1] == "img/ps4Pro.jpg") {
            let p = document.createElement("figcaption");
            let info2 = "<p class='jsSlider'>Renueva pasta térmica, PS4Pro.</p>";
            
            p = info2;
             caruselItem.innerHTML=p;
        }
        else {
            caruselItem.innerHTML="<p class='jsSlider'>Limpieza, consola de Video Juegos.</p>";
        }
    setTimeout(thumnail, 8000);


    // caruselItem.classList.toggle(`url(${carusel[0]})`);
    // caruselItem.style.backgroundImage = carusel;
};
thumnail();


// console.log(carusel[0]);


caruselItem.addEventListener('touchstart', () => {
    // thumnail();
    clearTimeout(thumnail);
    for (i = 0; i < carusel.length; i++) {
    caruselItem.style.backgroundImage = `url(${carusel[i]})`;
    };

    
});


const galeria2 = document.querySelector('.galeria2');
const photos = document.getElementsByClassName('photo');
const carousel = [
    'img/newg.jpeg',
    'img/lap02.jpeg',
    'img/lap03.jpeg',
    'img/lap04.jpeg',
    'img/xbox04.jpeg',
    'img/xbox05.jpeg'
];

// console.log(photos);

let slideIndex = 0;

galeria2.addEventListener('click', () => {
    // let i = 0;
    
    // galeria2
    // galeria2.style.backgroundImage = `url(${carusel2[i]})`;
    for (i = 0; i < carousel.length; i++) {
        photos[i].style.display = "none";
        galeria2.style.backgroundImage = `url(${carousel[i]})`;
    };

    
    
    slideIndex++;
 
    if(slideIndex > carousel.length) {slideIndex = 1};
    galeria2.style.backgroundImage = `url(${carousel[slideIndex-1]})`;
    // photos[slideIndex-1].style.display = "none";
    // galeria2[slideIndex-1].style.display = "flex";


});


// const carousel = new bootstrap.Carousel('#myCarousel');

