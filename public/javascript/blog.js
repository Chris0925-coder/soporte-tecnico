const blog = document.getElementById('blog');
const cblog = blog.querySelector('.item:first-child');
const newDiv = document.createElement('div');

// console.log(blog);

function content(title, filename, paragraph,link) {
		
	newDiv.innerHTML += `
		<article>
			<h2>${title}</h2>
			<figure>
				<img src='//visits-woad.vercel.app/img/${filename}' alt='#' width='200' height='250'>
				
				<figcaption>
					<a href="${link}" title="${title}" target="_blank"><span>${paragraph}</span></a>
				</figcaption>
			</figure>
		</article>
	`;

	blog.insertBefore(newDiv, cblog);
}

async function fetchContent() {

	let result = await fetch(`//visits-woad.vercel.app/articles/webdev`)
	.then(response => response.json())
	.catch((error) => {
        console.error("Error:", error.message);
        blog.style.color = "#990000";
        blog.innerText = error.message;
      });

	// console.log(!result.error);

	if(!result.error) {
		result.forEach(res => {			
			return content(res.title,res.images,res.paragraph,res.link);
		}) 

	}

	
}

fetchContent();