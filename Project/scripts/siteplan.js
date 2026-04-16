// 1. Objects & Arrays
const hubs = [
    { name: "CcHub", location: "Yaba", type: "Innovation", image: "images/cchub.jpg" },
    { name: "Venia Business Hub", location: "Lekki", type: "Co-working", image: "images/venia.jpg" },
    { name: "Lagos Innovates", location: "Ikeja", type: "Incubator", image: "images/innovates.jpg" }
];

// 2. DOM Selection
const container = document.querySelector("#hub-container");

// 3. Function with Template Literals
function displayHubs(filteredList) {
    container.innerHTML = ""; // Clear existing
    filteredList.forEach(hub => {
        const card = `
            <div class="hub-card">
                <img src="${hub.image}" alt="${hub.name}" loading="lazy">
                <h3>${hub.name}</h3>
                <p>Location: ${hub.location}</p>
                <p>Type: ${hub.type}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}

// 4. Conditional Branching & Array Methods
function filterHubs(location) {
    if (location === "all") {
        displayHubs(hubs);
    } else {
        const filtered = hubs.filter(hub => hub.location.toLowerCase() === location.toLowerCase());
        displayHubs(filtered);
    }
}

// 5. Event Listeners
document.querySelector("#filter-yaba")?.addEventListener("click", () => filterHubs("yaba"));
document.querySelector("#filter-lekki")?.addEventListener("click", () => filterHubs("lekki"));
document.querySelector("#filter-all")?.addEventListener("click", () => filterHubs("all"));

// 6. LocalStorage Usage
function trackVisits() {
    let visits = localStorage.getItem("visitCount") || 0;
    visits++;
    localStorage.setItem("visitCount", visits);
}

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    displayHubs(hubs);
    trackVisits();
    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
});