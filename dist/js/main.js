//Select DOM Items

//MENU BUTTON ETC>>

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const infoBtn = document.querySelectorAll(".show-more");
const formName = document.querySelector(".form-name");
const blogs = document.querySelector(".blogs");

//Setting Initial State of Menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add("close");
		menu.classList.add("show");
		menuNav.classList.add("show");
		menuBranding.classList.add("show");
		navItems.forEach((item) => item.classList.add("show"));

		//Set Menu State
		showMenu = true;
	} else {
		menuBtn.classList.remove("close");
		menu.classList.remove("show");
		menuNav.classList.remove("show");
		menuBranding.classList.remove("show");
		navItems.forEach((item) => item.classList.remove("show"));

		showMenu = false;
	}
}

//Information for projects page, show more info -> show/hide

let i;

for (i = 0; i < infoBtn.length; i++) {
	infoBtn[i].addEventListener("click", function () {
		this.classList.toggle("active");
		let content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}



//Blog posts

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
	console.log(data.items);

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

//EMAILJS FORM

(function () {
	emailjs.init("user_3jhJ0BpolKBa7lHro0NRv");
})();

window.onload = function () {
	document
		.getElementById("contact-send")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			// generate the contact number value
			let nameAlert;
			if (formName.value == "") {
				nameAlert = "*This Field is Required"
				document.querySelector(".name-alert").innerHTML = nameAlert
				document.myForm.Name.focus();
				return false;
			}
			else {
				console.log("sent")
			}
           
                //  this.contact_number.value = (Math.random() * 100000) | 0;
				// 	emailjs.sendForm("natwit95", "contact_form", this);
                
			})

			// .then(
			// 	function (response) {
			// 		console.log("SUCCESS!", response.status, response.text);
			// 		console.log(contactInputs);

			// 		Swal.fire({
			// 			position: "center",
			// 			icon: "success",
			// 			title: "Your message has been sent! ",
			// 			showConfirmButton: true,
			// 			// timer: 1500,
			// 		});
			// 	},
			// 	function (error) {
			// 		console.log("FAILED...", error);
			// 		Swal.fire({
			// 			position: "center",
			// 			icon: "error",
			// 			title:
			// 				"There was an error trying to send your message. Please try again later",
			// 			showConfirmButton: true,
			// 		});
			// 	}
			// );
        // });

};