// Typing animation function
function typeWriter(element, text, speed, callback) {
    let i = 0;
    let interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            setTimeout(callback, 500); // Pause before starting the next phrase
        }
    }, speed);
}

// Array of text phrases to type
const phrases = [
    "Passionate Student",
    "Software Developer",
    "CyberSecurity Enthusiast"
];

let currentPhraseIndex = 0;

// Get the element where the text will appear
window.onload = () => {
    const animatedText = document.querySelector('.animated-text');
    
    function startTyping() {
        animatedText.innerHTML = ''; // Clear previous text
        typeWriter(animatedText, phrases[currentPhraseIndex], 110, () => {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            startTyping(); // Continue typing the next phrase in the array
        });
    }
    
    startTyping();
};
