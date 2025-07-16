const img = document.getElementsByClassName('container-a');

const formA = document.getElementsByClassName('form-a');

console.log(img);


let timer = function() {
	img[0].style.opacity = "0.2";
	img[0].style.transition = "opacity 2.0s";
	// img[0].style.scale = "1 50%";
	formA[0].style.zIndex = "5000";
	
};
// hide();

let time = setTimeout(timer,5000);
// hideImg;

// hide();
time;