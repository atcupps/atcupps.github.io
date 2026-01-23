const top = document.getElementById("keyword-belt-top");
const mid = document.getElementById("keyword-belt-mid");
const bot = document.getElementById("keyword-belt-bottom");

function patternWidth() {
    if (window.innerWidth > 1111) {
        return 32;
    } else {
        return 64;
    }
}

let topPosition = 0;
setInterval(() => {
    topPosition += 0.1;
    if (topPosition >= patternWidth()) {
        topPosition = 0;
    }
    top.style.transform = `translateX(-${topPosition}vw)`;
}, 20);

let midPosition = 0;
setInterval(() => {
    midPosition += 0.3;
    if (midPosition >= patternWidth()) {
        midPosition = 0;
    }
    mid.style.transform = `translateX(-${midPosition}vw)`;
}, 20);

let botPosition = 0;
setInterval(() => {
    botPosition += 0.2;
    if (botPosition >= patternWidth()) {
        botPosition = 0;
    }
    bot.style.transform = `translateX(-${botPosition}vw)`;
}, 20);