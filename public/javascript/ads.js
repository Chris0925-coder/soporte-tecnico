let ads = document.querySelector('.ads');
let cc = ads.querySelector(".item:nth-child(2)");
// let ad = document.querySelector('.adA');
atOptions = {
  'key' : '5115a1b458f6b8de84588523b50d8c38',
  'format' : 'iframe',
  'height' : 60,
  'width' : 468,
  'params' : {},
  'src' : "//www.profitablecreativeformat.com/5115a1b458f6b8de84588523b50d8c38/invoke.js"
};
// let doc = atOptions;
// let a = document.createTextNode(atOptions);

// ads.append(doc);

// atOptions = {
//   'key' : '5115a1b458f6b8de84588523b50d8c38',
//   'format' : 'iframe',
//   'height' : 60,
//   'width' : 468,
//   'params' : {}
// };
let d = document.createElement('div');
// let doc = `<iframe 
//                 'key' : '5115a1b458f6b8de84588523b50d8c38',
//               'format' : 'iframe',
//               'height' : 60,
//               'width' : 468,
//               'params' : {}
//                 // src="//www.profitablecreativeformat.com/5115a1b458f6b8de84588523b50d8c38/invoke.js"></iframe>`;

// ads.innerHTML = doc;
ads.append(atOptions);

// ads = document.write(d,cc);

// ads.append(doc);