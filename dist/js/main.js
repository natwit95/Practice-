//Select DOM Items

//MENU BUTTON ETC>>

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const infoBtn = document.querySelectorAll(".show-more");
const formName = document.querySelector(".form-name");
const formEmail = document.querySelector(".form-email");
const formMessage = document.querySelector(".form-message")



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





//EMAILJS FORM



window.onload = function () {
	document
		.getElementById("contact-send")
		.addEventListener("submit", function (event) {
			event.preventDefault();
		
			
				const usernameValue = formName.value.trim();
				const emailValue = formEmail.value.trim();
				const messageValue = formMessage.value.trim();
				if (usernameValue === "") {
					setErrorFor(formName, "Username cannot be blank");
					return false
					
				} else {
					setSuccessFor(formName);
				}
				if (emailValue === "") {
					setErrorFor(formEmail, "Email cannot be blank");
					return false;
				} else {
					setSuccessFor(formEmail);
				}
				if (messageValue === "") {
					setErrorFor(formMessage, "Message cannot be blank");
					return false;
				} else {
					setSuccessFor(formMessage);
				}
				(function () {
					emailjs.init("user_3jhJ0BpolKBa7lHro0NRv");
				})();
			
				this.contact_number.value = (Math.random() * 100000) | 0;
				emailjs.sendForm("natwit95", "contact_form", this);
			
				Swal.fire({
						position: "center",
						icon: "success",
						title: "Your message has been sent! ",
						showConfirmButton: true,
						// timer: 1500,
						
				});


		})
	
	};
	



	function setErrorFor(input, message) {
		const formControl = input.parentElement;
		const small = formControl.querySelector("small");
		formControl.className = "form-control error";
		small.innerText = message;
	}

	function setSuccessFor(input) {
		const formControl = input.parentElement;
		formControl.className = "form-control success";
	}















	
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


