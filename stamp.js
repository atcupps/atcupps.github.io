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

function submitStamp() {
    const nameInput = document.getElementById('dialog-name-input');
    const name = nameInput.value;
    if (name.trim() === '') {
        name = null;
    }
    fetch("https://cawwohkcolitibadbvzj.supabase.co/rest/v1/stamps", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            apikey: 'sb_publishable_1jXARNJzbk8f2o2stHL6qQ_eMFB_Zb7',
            Authorization: 'Bearer sb_publishable_1jXARNJzbk8f2o2stHL6qQ_eMFB_Zb7',
            Prefer: 'return=minimal'
        },
        body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name: name,
            stampjson: JSON.stringify(pixels)
        }),
    })
    .then(res => {
        if (!res.ok) {
            handleSubmissionError();
        } else {
            handleSubmissionSuccess();
        }
    });
}

function handleSubmissionError() {
    alert('Error submitting stamp. Please try again later.');
}

function handleSubmissionSuccess() {
    closeDialog();
    const success = document.getElementById('stamp-success-box');
    success.style.display = 'flex';
}

function closeSuccessBox() {
    const success = document.getElementById('stamp-success-box');
    success.style.display = 'none';
}