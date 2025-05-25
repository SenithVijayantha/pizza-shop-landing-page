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
  // modal.classList.remove('modal-animate-leave');
  // modal.classList.add('modal-animate');
})

modalCloseBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  // modal.classList.remove('modal-animate');
  // modal.classList.add('modal-animate-leave');
})

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.classList.add('hidden'); // Use Tailwind class for hiding
  }
})