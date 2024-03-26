// Define arrays to store components of inspirational quotes
const subjects = [
    "Believe in yourself",
    "Dream big",
    "Stay positive",
    "Never give up",
    "Stay focused",
    "Chase your dreams",
    "Never stop learning",
    "Be kind to yourself",
    "Embrace challenges"
];

const verbs = [
    "inspires",
    "motivates",
    "encourages",
    "empowers",
    "uplifts"
];

const objects = [
    "to achieve greatness",
    "to overcome obstacles",
    "to pursue your dreams",
    "to make a difference",
    "and reach for the stars",
    "with passion and determination",
    "to spread kindness and positivity",
    "and embrace new opportunities",
    "and become the best version of yourself"
];

// Function to generate a random quote
function generateQuote() {
    // Check if arrays are empty
    if (subjects.length === 0 || verbs.length === 0 || objects.length === 0) {
        return "Error: Arrays are empty.";
    }

    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];

    return `${subject} ${verb} ${object}.`;
}

// Test the generateQuote function
const randomQuote = generateQuote();
console.log(randomQuote);
