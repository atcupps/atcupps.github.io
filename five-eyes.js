const eyes = document.getElementById("eyes-belt");
const five = document.getElementById("five-belt");

// continuously move eyes belt to the right to make it look
// like it's scrolling; reset position after 7.692*2 vw.
let eyesPosition = 0;
setInterval(() => {
    eyesPosition += 0.1;
    if (eyesPosition >= (7.692 * 2)) {
        eyesPosition = 0;
    }
    eyes.style.transform = `translateX(${eyesPosition}vw)`;
}, 20);

// continuously move five belt to the left to make it look
// like it's scrolling; reset position after 120 vw.
let fivePosition = 0;
setInterval(() => {
    fivePosition += 0.1;
    if (fivePosition >= 120) {
        fivePosition = 0;
    }
    five.style.transform = `translateX(-${fivePosition}vw)`;
}, 20);