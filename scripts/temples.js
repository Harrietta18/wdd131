// Date functionality
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Step 4.2: Hamburger Menu Toggle
const mainnav = document.querySelector('#animateme');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.textContent = hambutton.textContent === "≡" ? "X" : "≡";
});