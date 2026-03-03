let ads = document.querySelector('.ads');
// let c = ads.querySelector(".item:first-child");
let cc = ads.querySelector(".item:nth-child(2)");
let newScript = document.createElement("script");
// let newScriptOptions = document.createElement("script");
// let ad = document.querySelector('.adA');


// atOptions = {
// 	   'key' : '5115a1b458f6b8de84588523b50d8c38',
// 	   'format' : 'iframe',
// 	  'height' : 60,
// 	  'width' : 468,
// 	  'params' : {}
//  }
// let doc = atOptions;
// newScriptOptions.innerText = atOptions;

newScript.src = "https://www.highperformanceformat.com/fc389117d63f9f57a3d58b448932a87d/invoke.js";


// let a = '//www.profitablecreativeformat.com/5115a1b458f6b8de84588523b50d8c38/invoke.js';

// ads.append(doc);
// ads.insertBefore(newScriptOptions,c);
ads.insertBefore(newScript,cc);

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