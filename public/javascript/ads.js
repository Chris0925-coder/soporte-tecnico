let ads = document.querySelector('.ads-container');
let adsImg = document.querySelector('.ads');
// console.log(ads);
let itemImg = adsImg.querySelector(".item-img:nth-child(2)");
// console.log(itemImg);
// let c = ads.querySelector(".item:first-child");
// let newScript = document.createElement("script");
// let newScriptOptions = document.createElement("script");
// let ad = document.querySelector('.adA');
let newImg = document.createElement("img");
let close = document.querySelector(".close");

// atOptions = {
// 	   'key' : '5115a1b458f6b8de84588523b50d8c38',
// 	   'format' : 'iframe',
// 	  'height' : 60,
// 	  'width' : 468,
// 	  'params' : {}
//  }
// let doc = atOptions;
// newScriptOptions.innerText = atOptions;

//newScript.src = "https://www.highperformanceformat.com/fc389117d63f9f57a3d58b448932a87d/invoke.js";
close.addEventListener('click', () => {
	ads.style.display = "none";
})

// let a = '//www.profitablecreativeformat.com/5115a1b458f6b8de84588523b50d8c38/invoke.js';

let imgs = [
	"se_vende_toyota_corolla_cross.jpg",
	"se_vende_toyota_corolla_cross_2025.jpg",
	"se_vende_toyota_corolla_cross_2025_17000.jpg",
	"se_vende_toyota_corolla_cross_automatico.jpg",
	"se_vende_toyota_corolla_cross_boton_de_encendido.jpg",
	"se_vende_toyota_corolla_precio_17000.jpg"
]

// ads.append(doc);
// ads.insertBefore(newScriptOptions,c);

newImg.src = "public/toyota_corolla/se_vende_toyota_corolla_cross.jpg";
newImg.alt = "Se vende Toyota Cross 2025";

adsImg.insertBefore(newImg, itemImg);


//const slides = document.querySelector('.slides');
//const slideElements = document.querySelectorAll('.slide');
//const prevBtn = document.querySelector('.prev');
//const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 0;
let autoSlideInterval;

// Crear puntos de navegación
imgs.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(_, i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider(a) {
    //slides.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
	newImg.src = `public/toyota_corolla/${a}`;

}

function goToSlide(i, a) {
    index = a;
    updateSlider(i);
    // resetAutoSlide();
}


// let urlAds = "https://www.highperformanceformat.com/fc389117d63f9f57a3d58b448932a87d/invoke.js";

// async function fetchData(urlAds) {
//     try {
//         const response = await fetch(urlAds);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("GET Data:", data);
//         return ads.insertBefore(data,cc);;
//     } catch (error) {
//         console.error("Error fetching data:", error.message);
//     }
// }

// fetchData();
// Example: POST request using Fetch API
// async function postData(url, payload) {
//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(payload)
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("POST Response:", data);
//         return data;
//     } catch (error) {
//         console.error("Error posting data:", error.message);
//     }
// }

// Usage examples:
// fetchData("https://jsonplaceholder.typicode.com/posts/1");

// postData("https://jsonplaceholder.typicode.com/posts", {
//     title: "foo",
//     body: "bar",
//     userId: 1
// });


// atOptions = {
//   'key' : '5115a1b458f6b8de84588523b50d8c38',
//   'format' : 'iframe',
//   'height' : 60,
//   'width' : 468,
//   'params' : {}
// };
// let d = document.createElement('div');

// d.innerHTML = JSON.stringify(atOptions) + a;
// let doc = `<iframe 
//                 'key' : '5115a1b458f6b8de84588523b50d8c38',
//               'format' : 'iframe',
//               'height' : 60,
//               'width' : 468,
//               'params' : {}
//                 // src="//www.profitablecreativeformat.com/5115a1b458f6b8de84588523b50d8c38/invoke.js"></iframe>`;

// ads.innerHTML = doc;
// ads.appendChild(d, cc);

// ads = document.write(d,cc);

// ads.append(doc);