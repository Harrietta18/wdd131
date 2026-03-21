// Footer Dates
const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastMod = document.querySelector("#lastModified");
lastMod.textContent = `Last Modification: ${document.lastModified}`;

// Hamburger Menu Toggle
const mainNav = document.querySelector('#animateme');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    // Change button text between ≡ and X
    hamButton.textContent = hamButton.textContent === "≡" ? "X" : "≡";
});