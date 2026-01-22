const canvas = document.getElementById('game-of-life');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const rows = 16;
const cols = 16;

const cells = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const cellSize = width / cells[0].length;

function drawCells() {
    ctx.clearRect(0, 0, width, height);
    for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells[y].length; x++) {
            // if in top-right corner, continue:
            if (x >= cols - 3 && y < 3) {
                continue;
            }
            // if in bottom-left corner, continue:
            if (x < 3 && y >= rows - 3) {
                continue;
            }
            if (cells[y][x] === 1) {
                // fill live cells with a white circle
                ctx.fillStyle = 'white';
                const center = cellSize / 2;
                ctx.beginPath();
                ctx.arc(x * cellSize + center, y * cellSize + center, cellSize / 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
}

function updateCells() {
    const newCells = JSON.parse(JSON.stringify(cells));
    for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells[y].length; x++) {
            let liveNeighbors = 0;
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if (dx === 0 && dy === 0) continue;
                    const ny = (y + dy + rows) % rows;
                    const nx = (x + dx + cols) % cols;
                    liveNeighbors += cells[ny][nx];
                }
            }
            if (cells[y][x] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    newCells[y][x] = 0; // Cell dies
                }
            } else {
                if (liveNeighbors === 3) {
                    newCells[y][x] = 1; // Cell becomes alive
                }
            }
        }
    }
    for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells[y].length; x++) {
            cells[y][x] = newCells[y][x];
        }
    }
}

while (true) {
    drawCells();
    // Pause for a moment to visualize the current state
    await new Promise(resolve => setTimeout(resolve, 500));
    // update
    updateCells();
}