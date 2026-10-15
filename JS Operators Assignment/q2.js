
 // Original product name with extra spaces
const productName = " wireless headphones PRO ";

// Remove extra spaces and convert to lowercase
let cleanedTitle = productName.trim().toLowerCase();

// Capitalize the first letter of each word
cleanedTitle = cleanedTitle
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with "Pro Edition"
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

// Display the cleaned title and its length
console.log(`Product Title: ${cleanedTitle}`);
console.log(`Title Length: ${cleanedTitle.length}`);
