// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    // Formula for Celsius: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}

// Select elements
const tempElement = parseFloat(document.getElementById("temp").textContent);
const windElement = parseFloat(document.getElementById("wind").textContent);
const windChillElement = document.getElementById("windchill");

// Check conditions (Metric: Temp <= 10°C AND Wind > 4.8 km/h)
if (tempElement <= 10 && windElement > 4.8) {
    windChillElement.textContent = calculateWindChill(tempElement, windElement) + "°C";
} else {
    windChillElement.textContent = "N/A";
}