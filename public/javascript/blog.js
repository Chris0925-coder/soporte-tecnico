// const dominio = window.location.origin;
const blog = document.getElementById('blog');
const cblog = blog.querySelector('.item:first-child');
const newDiv = document.createElement('div');
const url = `https://visits-christian-guardias-projects.vercel.app/count`;
const d = localStorage.getItem("acceptedCookies");
let dd = new Date().toLocaleDateString("es-PA", {
  weekday: "long",
  day: "numeric",
  month: "short",
  hour: "numeric",
  minute: "numeric",
  hour12: true
});

const dominio = window.location.origin;

function cli() {
	blog.addEventListener('click', function (event) {
		if(event.target.tagName === "A" || event.target.tagName === "SPAN") {
			// return cb(1);

			let analyticsData = {
		        id: 5,
		        count: 0,
		        domain: dominio + "/blog.html",
		        date: `desde: 06/2025 | última vista: ${dd}`,
		        clicks: 1,
		    };
		    navigator.sendBeacon(url, JSON.stringify(analyticsData));
		}
	})
}

cli();

function count() {
    let analyticsData = {
        id: 5,
        count: 1,
        domain: dominio + "/blog.html",
        date: `desde: 06/2025 | última vista: ${dd}`,
        clicks: 0,
    };
    navigator.sendBeacon(url, JSON.stringify(analyticsData));
};



// window.addEventListener("load", function() {
    // if(d) {
count();


    // }
// });

function content(title, filename, paragraph,link) {
		
	newDiv.innerHTML += `
		<article>
			<h2>${title}</h2>
			<figure>
				<img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/${filename}' alt='#' width='200' height='250'>
				
				<figcaption>
					<a href="${link}" title="${title}" target="_blank"><span>${paragraph}</span></a>
				</figcaption>
			</figure>
		</article>
	`;

	blog.insertBefore(newDiv, cblog);
}

async function fetchContent() {

	let result = await fetch(`https://visits-woad.vercel.app/articles/webdev`)
	.then(response => response.json())
	.catch((error) => {
        console.error("Error:", error.message);
        blog.style.color = "#990000";
        blog.innerText = error.message;
      });

	if(!result.error) {
		result.forEach(res => {			
			return content(res.title,res.images,res.paragraph,res.link);
		}) 

	}

	
}

fetchContent();

