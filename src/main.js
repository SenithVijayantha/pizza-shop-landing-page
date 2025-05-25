const navBarToggler = document.getElementById("navbar-toggler");
const mobileNavBar = document.getElementById("navbar-default");
const modalTogglerBtn = document.getElementById('modal-toggler');
const modal = document.getElementById('crud-modal');
const modalCloseBtn = document.getElementById('close-modal');

navBarToggler.addEventListener('click', () => {
  mobileNavBar.classList.toggle("hidden");
})

modalTogglerBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
})

modalCloseBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
})

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.classList.add('hidden'); // Use Tailwind class for hiding
  }
})