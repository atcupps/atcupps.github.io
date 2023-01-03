'use strict'

//Writing version
const d = new Date();
var year = d.getFullYear() - 2004;
var month = d.getMonth() + 1;
var day = d.getDay() + 1;
document.getElementById("version").innerHTML = "" + year + "." + month + "." + day;