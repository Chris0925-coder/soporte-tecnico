const ads = document.querySelector('.ads');
// atOptions = {
//   'key' : '5115a1b458f6b8de84588523b50d8c38',
//   'format' : 'iframe',
//   'height' : 60,
//   'width' : 468,
//   'params' : {}
// };
// let doc = ('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/5115a1b458f6b8de84588523b50d8c38/invoke.js"></scr' + 'ipt>');
// let a = document.createTextNode(atOptions);

// ads.append(doc);

atOptions = {
  'key' : '5115a1b458f6b8de84588523b50d8c38',
  'format' : 'iframe',
  'height' : 60,
  'width' : 468,
  'params' : {}
};
let doc = document.write('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/5115a1b458f6b8de84588523b50d8c38/invoke.js"></scr' + 'ipt>');

ads.append(atOption+doc);