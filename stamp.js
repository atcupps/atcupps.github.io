// Import from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } 
    from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// Your config (from Firebase console)
const firebaseConfig = {
    apiKey: "AIzaSyCpiu1L1zUc7C11uQAypmBMAE4SFHwNkiE",
    authDomain: "stamps-2cac0.firebaseapp.com",
    projectId: "stamps-2cac0",
    storageBucket: "stamps-2cac0.firebasestorage.app",
    messagingSenderId: "262226266268",
    appId: "1:262226266268:web:13be3618a7ea20f0f5c559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// add grid of buttons to stamp-editor
const stamp = document.getElementById('stamp-editor');
const buttonGrid = document.createElement('div');
buttonGrid.style.display = 'grid';
buttonGrid.style.gridTemplateColumns = 'repeat(16, 1fr)';
buttonGrid.style.gridTemplateRows = 'repeat(16, 1fr)';
buttonGrid.style.width = '100%';
buttonGrid.style.height = '100%';
buttonGrid.style.gap = '0px';
buttonGrid.style.border = 'none';

const pixels = [
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
];

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        // no buttons on corners
        if (i == 0 && j == 0 || i == 0 && j == 15 || i == 15 && j == 0 || i == 15 && j == 15) {
            const emptyDiv = document.createElement('div');
            buttonGrid.appendChild(emptyDiv);
            continue;
        }

        const button = document.createElement('button');
        button.classList.add('stamp-editor-button');
        button.classList.add('filled');
        button.addEventListener('click', () => {
            handleEdit(button, i, j)
        });
        buttonGrid.appendChild(button);
    }
}

stamp.appendChild(buttonGrid);

function handleEdit(button, row, col) {
    button.classList.toggle('filled');
    const curState = pixels[row][col];
    pixels[row][col] = curState === 1 ? 0 : 1;
}

function openDialog() {
    const dialog = document.getElementById('stamp-dialog');
    dialog.style.display = 'flex';
}

function closeDialog() {
    const dialog = document.getElementById('stamp-dialog');
    dialog.style.display = 'none';
}

async function submitStamp() {
    const nameInput = document.getElementById('dialog-name-input');
    const trimmedName = nameInput.value.trim();
    const name = trimmedName === '' ? null : trimmedName;

    try {
        console.log("adding")
        await addDoc(collection(db, 'stamps'), {
            timestamp: new Date().toISOString(),
            name,
            stampjson: JSON.stringify(pixels),
        });
        handleSubmissionSuccess();
    } catch (err) {
        console.error('Failed to upload stamp:', err);
        handleSubmissionError();
    }
}

function handleSubmissionError() {
    alert('Error submitting stamp. Please try again later.');
}

function handleSubmissionSuccess() {
    console.log("success")
    closeDialog();
    const success = document.getElementById('stamp-success-box');
    success.style.display = 'flex';
}

function closeSuccessBox() {
    const success = document.getElementById('stamp-success-box');
    success.style.display = 'none';
}

// Expose handlers for inline onclick attributes in index.html
window.openDialog = openDialog;
window.closeDialog = closeDialog;
window.submitStamp = submitStamp;
window.closeSuccessBox = closeSuccessBox;
