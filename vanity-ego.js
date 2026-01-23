const vanity = document.getElementById("vanity-belt");
const ego = document.getElementById("ego-belt");

// continuously move vanity belt to the right to make it look
// like it's scrolling; reset position after 43.2 vw.
let vanityPosition = 0;
setInterval(() => {
    vanityPosition += 0.1;
    if (vanityPosition >= 43.2) {
        vanityPosition = 0;
    }
    vanity.style.transform = `translateX(${vanityPosition}vw)`;
}, 20);

// continuously move ego belt to the left to make it look
// like it's scrolling; reset position after 43.2 vw.
let egoPosition = 0;
setInterval(() => {
    egoPosition += 0.1;
    if (egoPosition >= 43.2) {
        egoPosition = 0;
    }
    ego.style.transform = `translateX(-${egoPosition}vw)`;
}, 20);