let ads = document.querySelector('.ads');
let cc = ads.querySelector(".item:nth-child(2)");
// let ad = document.querySelector('.adA');
atOptions = {
  'key' : '5115a1b458f6b8de84588523b50d8c38',
  'format' : 'iframe',
  'height' : 60,
  'width' : 468,
  'params' : {}
};
let doc = '<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/5115a1b458f6b8de84588523b50d8c38/invoke.js"></scr' + 'ipt>';
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

d.innerHTML = `${atOptions}` + `${doc}`;
ads.appendChild(d, cc);

// ads = document.write(d,cc);

// ads.append(doc);