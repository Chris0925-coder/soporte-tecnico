
const date = new Date();

const d = document.getElementsByClassName('date');

d[0].insertAdjacentHTML('beforeend', date.getFullYear());


const btnMenu = document.getElementsByClassName('nav__menu')[0];

const nav = document.getElementsByClassName('nav-collapse')[0];
const close = document.getElementsByClassName('btn-close')[0];


function navBTNs(a) {
	a.addEventListener('click', () => {
		nav.classList.toggle('visible')
	});
}

navBTNs(btnMenu);
navBTNs(close);