const button = document.querySelector('.btn');
const menu = document.querySelector('.nav-collapse');
// const nav = document.querySelector('.nav-navbar');

button.addEventListener('click', () => {
    menu.classList.toggle('collapse-visible');
    // menu.style.opacity = "1";
    // nav.style.opacity: "1";
    // nav.style.transition: "opacity 0.75s";
});


// Código que hace reutilizable una funcion. 
// const button2 = document.querySelector('.primary');
// const menu2 = document.querySelector('.row');

// let Hola = function(promesa, promesa2) {
//     promesa.addEventListener('click', () => {
//         promesa2.style.display = "none";
//     });
// };

// Hola(button2, menu2);


// const btn2 = document.querySelector(".btn2");

// const onSearch = () => {
//     const input = document.querySelector(".search");
//     const filter = input.value.toUpperCase();

//     const list = document.querySelectorAll(".pro-list li");


//     list.forEach((el) => {
//         const text = el.textContent.toUpperCase();

//         el.style.display = text.includes(filter)?"": "none";
//     });
// };
// btn2.addEventListener("click", () => {
//     onSearch();
// });




// CHANGE LANGUAJE
// const lang = document.querySelector('.bi-toggle-off');
// const btnd = document.querySelector('.bi-toggle-on');

// lang.addEventListener('click', () => {
//     lang.classList.toggle('hide');
//     btnd.style.display = "flex";
//         window.location.replace("C:/Users/Christian%20Guardia/Documents/Projectos%20HTML/layouts/translate/english.html");

// });


// btnd.addEventListener('click', () => {
//     btnd.classList.toggle('hide');
//     lang.style.display = "flex";
//     window.location.replace("C:/Users/Christian%20Guardia/Documents/Projectos%20HTML/layouts/index.html");
// });
// CHANGE LANGUAJE







// let count = 0;

let wrapB = document.getElementById("wrap-b");
let wrapA = document.getElementById("wrap-a");
let wrapC = document.getElementById("wrap-c");
let wrapb = document.getElementsByClassName("gallery-item");
let itemImage = document.getElementsByClassName("item-image");
// console.log(wrapb);
// console.log(itemImage);


// function round(w) {

    wrapB.addEventListener('click', () => {

        wrapb[3].appendChild(itemImage[4]);
        wrapb[4].appendChild(itemImage[5]);
        wrapb[5].appendChild(itemImage[3]);

    });

    wrapA.addEventListener('click', () => {

        wrapb[0].appendChild(itemImage[1]);
        wrapb[1].appendChild(itemImage[2]);
        wrapb[2].appendChild(itemImage[0]);

    });

    wrapC.addEventListener('click', () => {

        wrapb[6].appendChild(itemImage[7]);
        wrapb[7].appendChild(itemImage[8]);
        wrapb[8].appendChild(itemImage[6]);

    });
// };


// round(wrapA);
// round(wrapB);
// round(wrapC);
