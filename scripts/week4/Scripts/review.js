// Get the current count from localStorage (returns null if it's the first time)
let numReviews = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

// Increment the count
numReviews++;

// Display the count in the HTML element
const displayElement = document.querySelector("#review-count-display");
displayElement.textContent = `Reviews completed: ${numReviews}`;

// Store the updated count back in localStorage
localStorage.setItem("reviewCount-ls", numReviews);