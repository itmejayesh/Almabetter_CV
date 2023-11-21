const toggleMenu = () => {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
};

function sendEmail() {
	window.location.assign("mailto:xyz@abc.com");
}

function sendMail() {
	// Get the email address from the clicked element
	const emailAddress = document.getElementById("send").textContent;

	// Create a mailto link and open it
	const mailtoLink = `mailto:${emailAddress}`;
	window.open(mailtoLink);
}
