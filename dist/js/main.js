//Select DOM Items

//MENU BUTTON ETC>>

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')
const infoBtn = document.querySelectorAll(".show-more");

//Setting Initial State of Menu 

let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close')
        menu.classList.add("show");
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach(item => item.classList.add('show'))

        //Set Menu State
        showMenu= true
    } else {
        menuBtn.classList.remove('close')
        menu.classList.remove("show");
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(item => item.classList.remove('show'))

        showMenu = false
    }
}

// var infoBtn = document.getElementsByClassName("collapsible");

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