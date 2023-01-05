'use strict'

//Writing version
const d = new Date();
var year = d.getFullYear() - 2004;
var month = d.getMonth() + 1;
var day = d.getDay() + 1;
document.getElementById("version").innerHTML = "" + year + "." + month + "." + day;

writeConsole();

//AndrewCupps.java button in top navbar tabs
var curDisplay = "andrewcupps";
document.getElementById("andrewcuppsbutton").onclick = function() {
    if (curDisplay != "andrewcupps") {
        curDisplay = "andrewcupps"
        document.getElementById("andrewcupps").style.visibility = "visible";
    }
}

//Run button in top navbar
document.getElementById("runBtn").onclick = function() {
    if (curDisplay == "andrewcupps") {
        console.log("beans");
        document.getElementById("console1").innerHTML = "";
        document.getElementById("console1ln2").innerHTML = "";
        document.getElementById("console2").innerHTML = "";
        document.getElementById("console3").innerHTML = "";
        document.getElementById("console4").innerHTML = "";
        document.getElementById("console5").innerHTML = "";
        writeConsole();
    }
}

/**
 * Several functions to animate the appearance of text in the console section of the page
 */
var speed = 250;
var shouldPrintLast = false;

function writeConsole() {
    shouldPrintLast = false;
    setTimeout(writeConsole1, speed);
}

function writeConsole1() {
    document.getElementById("console1").innerHTML = "> Hello, my name is Andrew Cupps, and I am an undergraduate computer science and astronomy student at the University of Maryland!";
    setTimeout(writeConsole1ln2, speed);
}

function writeConsole1ln2() {
    document.getElementById("console1ln2").innerHTML = "Feel free to explore my website, or contact me at the email listed below. ";
    setTimeout(writeConsole2, speed);
}

function writeConsole2() {
    document.getElementById("console2").innerHTML = "> My email: at.cupps@gmail.com";
    setTimeout(writeConsole3, speed);
}

function writeConsole3() {
    document.getElementById("console3").innerHTML = "> Languages I write in: [Java, R, Matlab, JavaScript, HTML/CSS, Python, C++]";
    setTimeout(writeConsole4, speed);
}

function writeConsole4() {
    document.getElementById("console4").innerHTML = "> Software/Tools I use: [Eclipse, JUnit, RStudio, LaTeX, Git, GitHub, Matlab, VS Code, Blender]";
    shouldPrintLast = true;
    setTimeout(writeConsole5, speed);
}

var hasVertLine = false;
function writeConsole5() {
    if (shouldPrintLast) {
        document.getElementById("console5").innerHTML = "> ";
        if (!hasVertLine) {
            document.getElementById("console5").innerHTML += "|";
        }
        hasVertLine = !hasVertLine;
        setTimeout(writeConsole5, 1000);
    }
}