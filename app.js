'use strict'

//Writing version
const d = new Date();
var year = d.getFullYear() - 2004;
var month = d.getMonth() + 1;
var day = d.getDay() + 1;
document.getElementById("version").innerHTML = "" + year + "." + month + "." + day;

var curDisplay = "andrewcupps";
document.getElementById("andrewcuppsbutton").onclick = function() {
    if (curDisplay != "andrewcupps") {
        curDisplay = "andrewcupps";
        document.getElementById("andrewcupps").style.visibility = "visible";
    }

    //document.getElementById("andrewcupps").style.visibility = "hidden";
}