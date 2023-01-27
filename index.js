'use strict'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const itersPerLetter = 3;

//Menu Hover effects

// document.querySelector("#about").onmouseover = event => {
//     var iters = 0;

//     const interval = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("")
//         .map((letter, index) => {
//             if (index < iters) {
//                 return event.target.dataset.value[index];
//             }

//             return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//         if (iters >= event.target.dataset.value.length) {
//             clearInterval(interval);
//         }

//         iters += 1 / itersPerLetter;
//     }, 30);
// }

// document.querySelector("#portfolio").onmouseover = event => {
//     var iters = 0;

//     const interval = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("")
//         .map((letter, index) => {
//             if (index < iters) {
//                 return event.target.dataset.value[index];
//             }

//             return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//         if (iters >= event.target.dataset.value.length) {
//             clearInterval(interval);
//         }

//         iters += 1 / itersPerLetter;
//     }, 30);
// }

// document.querySelector("#resume").onmouseover = event => {
//     var iters = 0;

//     const interval = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("")
//         .map((letter, index) => {
//             if (index < iters) {
//                 return event.target.dataset.value[index];
//             }

//             return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//         if (iters >= event.target.dataset.value.length) {
//             clearInterval(interval);
//         }

//         iters += 1 / itersPerLetter;
//     }, 30);
// }

// document.querySelector("#contact").onmouseover = event => {
//     var iters = 0;

//     const interval = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("")
//         .map((letter, index) => {
//             if (index < iters) {
//                 return event.target.dataset.value[index];
//             }

//             return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//         if (iters >= event.target.dataset.value.length) {
//             clearInterval(interval);
//         }

//         iters += 1 / itersPerLetter;
//     }, 30);
// }