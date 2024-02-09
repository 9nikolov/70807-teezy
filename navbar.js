const hamburger = document.getElementById('navbar__hamburger');
const links = document.getElementById('navbar__links');
const closeHamburgerMenu = document.getElementById('navbar__hamburger-close');

hamburger.addEventListener('click', () => {
    links.classList.add('move-left');
});

closeHamburgerMenu.addEventListener('click', () => {
    links.classList.remove('move-left');
});

