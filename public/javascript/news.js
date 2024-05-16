const key = "3419c99846eb4d49995f2019e89bc5d5";
const cat = "&category=technology";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
// https://newsapi.org/v2/everything?q=Apple&from=2024-05-15&sortBy=popularity&apiKey=
 // https://newsapi.org/v2/top-headlines?country=us&apiKey=


const showNews = document.getElementById('news-api');

fetch(url).then((resp) => resp.json()).then(dato => {
	console.log(dato);
	let news = (dato.articles);
	news.map(function(num){
		let div = document.createElement('news');
		div.innerHTML = `<br>
						<img style="max-witdh:600px" src=${num.urlToImage}><br>
						<h1>${num.title}</h1>
						<h2>${num.description}</h2>
						<h3>${num.url}</h3>`;

	showNews.appendChild(div);
	}) 
});