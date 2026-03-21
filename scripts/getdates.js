
const currentYearElement = document.querySelector("#currentyear");
const today = new Date();
currentYearElement.innerHTML = today.getFullYear();


const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;