var quotes = [
    "The only way to do great work is to love what you do.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Your limitation—it’s only your imagination.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction."
];

const usedIdexes = new Set();
const quoteDisplayElement = document.getElementById('quote');

function generateQuote() {
    if (usedIdexes.size === quotes.length) {
        // send a toast message to the user
        alert('You have seen all the quotes');
        usedIdexes.clear();
    }
    while (true){
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if (usedIdexes.has(randomIdx)){
            continue;
        }
        const quote = quotes[randomIdx];
        quoteDisplayElement.innerHTML = quote;
        usedIdexes.add(randomIdx);
        break

    }
}  
