//Blog posts
const blogs = document.querySelector(".blogs");

document.body.onload = fetchBlogs;
function fetchBlogs() {
	fetch(
		"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40natwit95"
	)
		.then((resp) => resp.json())
		.then((data) => {
			displayBlog(data);
		});
}

function displayBlog(data) {
	

	data.items.forEach((blog) => {
		// console.log(blog)
		let eachBlog = document.createElement("div");
		eachBlog.className = "blog-card";
		eachBlog.innerHTML = `<div class="container">
				<img src="${blog.thumbnail}" class="blog__topImg"></img>
				<h6 class="blog-date">${formatDate(blog.pubDate)}</h6>
			</div>
				<h3 class="blog-title">${blog.title}</h3>
				<a href=${blog.link} class="blog-button">Read Article ‣</a>`;
		blogs.append(eachBlog);
	});

	function formatDate(dateString) {
		let formattedDate = dateString.split(" ")[0];
		let numbers = formattedDate.split("-");
		let year = numbers.shift(); // remove first element and return it
		numbers.push(year);
		return numbers.join("-");
	}
}
