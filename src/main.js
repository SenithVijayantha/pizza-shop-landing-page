const navBarToggler = document.getElementById("navbar-toggler");
const mobileNavBar = document.getElementById("navbar-default");

navBarToggler.addEventListener('click', () => {
  mobileNavBar.classList.toggle("hidden");
})