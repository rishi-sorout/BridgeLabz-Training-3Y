
 // Weather details
const temperature = 25;
const isRaining = false;
const windSpeed = 10;

// Recommend an activity based on weather conditions
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

// Example of combining && and || conditions
if ((temperature > 35 && !isRaining) || windSpeed > 40) {
    console.log("Weather alert: Be careful outdoors.");
}
