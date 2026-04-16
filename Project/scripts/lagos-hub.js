// 1. Array of Objects representing the Hubs
const hubs = [
    {
        name: "CcHub",
        location: "Yaba",
        type: "Innovation Hub",
        image: "images/cchub.webp",
        desc: "The heartbeat of the Yaba tech ecosystem."
    },
    {
        name: "Venia Business Hub",
        location: "Lekki",
        type: "Co-working",
        image: "images/venia.webp",
        desc: "Premium office spaces for entrepreneurs in Lekki."
    },
    {
        name: "Lagos Innovates",
        location: "Ikeja",
        type: "Incubator",
        image: "images/innovates.webp",
        desc: "Government-backed support for tech startups."
    },
    {
        name: "Leadspace",
        location: "Yaba",
        type: "Shared Office",
        image: "images/leadspace.webp",
        desc: "Creative shared spaces for freelancers."
    }
];

// 2. Select DOM elements
const hubContainer = document.querySelector("#hub-container");

// 3. Function to display hubs using Template Literals
function displayHubs(hubList) {
    hubContainer.innerHTML = ""; // Clear current content
    
    hubList.forEach(hub => {
        const card = `
            <div class="hub-card">
                <img src="${hub.image}" alt="${hub.name}" loading="lazy">
                <div class="hub-card-content">
                    <h3>${hub.name}</h3>
                    <p><strong>📍 Location:</strong> ${hub.location}</p>
                    <p><strong>🏢 Type:</strong> ${hub.type}</p>
                    <p>${hub.desc}</p>
                </div>
            </div>
        `;
        hubContainer.innerHTML += card;
    });
}

// 4. Filtering logic using Array Methods (filter)
function filterByLocation(location) {
    if (location === 'all') {
        displayHubs(hubs);
    } else {
        const filtered = hubs.filter(hub => hub.location.toLowerCase() === location.toLowerCase());
        displayHubs(filtered);
    }
}

// 5. Event Listeners for buttons
document.querySelector("#filter-all").addEventListener("click", () => filterByLocation('all'));
document.querySelector("#filter-yaba").addEventListener("click", () => filterByLocation('yaba'));
document.querySelector("#filter-lekki").addEventListener("click", () => filterByLocation('lekki'));
document.querySelector("#filter-ikeja").addEventListener("click", () => filterByLocation('ikeja'));


// 6. Dynamic Footer Dates & LocalStorage
function setupFooter() {
    const yearSpan = document.querySelector("#currentyear");
    const modSpan = document.querySelector("#lastModified");
    
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modSpan) modSpan.textContent = `Last Modified: ${document.lastModified}`;

    // LocalStorage example: track how many times the user viewed the directory
    let visitCount = localStorage.getItem("hubVisitCount") || 0;
    visitCount++;
    localStorage.setItem("hubVisitCount", visitCount);
    console.log(`You have visited this directory ${visitCount} times.`);
}

// Initial Call
document.addEventListener("DOMContentLoaded", () => {
    displayHubs(hubs);
    setupFooter();
});