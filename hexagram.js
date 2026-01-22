const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const line4 = document.getElementById("line-4");
const line5 = document.getElementById("line-5");
const line6 = document.getElementById("line-6");

let currentIndex = 0;
const values = [
    0b000000, 0b111111,
    0b101110, 0b011101,
    0b101000, 0b000101,
    0b111101, 0b101111,
    0b001000, 0b000100,
    0b111000, 0b000111,
    0b000010, 0b010000,
    0b111011, 0b110111,
    0b100110, 0b011001,
    0b111100, 0b001111,
    0b010110, 0b011010,
    0b011111, 0b111110,
    0b000110, 0b011000,
    0b011110, 0b100001,
    0b101101, 0b010010,
    0b100011, 0b110001,
    0b000011, 0b110000,
    0b010111, 0b111010,
    0b001010, 0b010100,
    0b101011, 0b110101,
    0b011100, 0b001110,
    0b100000, 0b000001,
    0b100111, 0b111001,
    0b100101, 0b101001,
    0b100010, 0b010001, 
    0b110110, 0b011011,
    0b001011, 0b110100,
    0b110010, 0b010011,
    0b001001, 0b100100,
    0b001101, 0b101100,
    0b001100, 0b110011,
    0b101010, 0b010101,
];

const yinLines = [
    0, // line 1
    0, // line 2
    0, // line 3
    0, // line 4
    0, // line 5
    0, // line 6
];

function updateHexagram() {
    const currentValue = values[currentIndex];
    yinLines[0] = currentValue & 1;
    yinLines[1] = (currentValue >> 1) & 1;
    yinLines[2] = (currentValue >> 2) & 1;
    yinLines[3] = (currentValue >> 3) & 1;
    yinLines[4] = (currentValue >> 4) & 1;
    yinLines[5] = (currentValue >> 5) & 1;

    line1.style.transform = 'scaleX(' + (yinLines[0] ? '1' : '0') + ')';
    line2.style.transform = 'scaleX(' + (yinLines[1] ? '1' : '0') + ')';
    line3.style.transform = 'scaleX(' + (yinLines[2] ? '1' : '0') + ')';
    line4.style.transform = 'scaleX(' + (yinLines[3] ? '1' : '0') + ')';
    line5.style.transform = 'scaleX(' + (yinLines[4] ? '1' : '0') + ')';
    line6.style.transform = 'scaleX(' + (yinLines[5] ? '1' : '0') + ')';

    currentIndex = (currentIndex + 1) % values.length;
}

updateHexagram();
setInterval(updateHexagram, 1000);