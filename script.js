let size = 16;
let currentColor = '#a6a6a6';
let colorMode = 'color';

function resizeGrid(length) {
  const sketchGrid = document.getElementById('sketch-grid');
  sketchGrid.style.gridTemplate = `repeat(${length}, 1fr) / repeat(${length}, 1fr)`;
  let totalDivs = length*length;
  while(sketchGrid.firstChild) {
    sketchGrid.removeChild(sketchGrid.lastChild);
  }
  for (let index = 0; index < totalDivs; index++) {
    let divElement = document.createElement('div');
    divElement.addEventListener('mouseover', changeColor);
    sketchGrid.appendChild(divElement);
  }
}

function changeColor(e) {
  if (colorMode === 'colorMode') {
    e.target.style.backgroundColor = currentColor;
  }
  if (colorMode === 'eraserMode') {
    e.target.style.backgroundColor = 'white';
  }
  if (colorMode === 'rnbwMode') {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }
}

function sliderChange(newSize) {
  let output = document.getElementById("slider-value");
  output.innerHTML = `${newSize}x${newSize}`;
  size = newSize;
  resizeGrid(newSize);
}

function modeChange(clickedBtn) {
  colorModeBtn.classList.remove("activeBtn");
  rnbwModeBtn.classList.remove("activeBtn");
  eraserModeBtn.classList.remove("activeBtn");

  clickedBtn.classList.add("activeBtn");
  colorMode = clickedBtn.id;
}

let slider = document.getElementById("gridSize");
let output = document.getElementById("slider-value");
let colorPicker = document.getElementById("colorPicker");
let colorModeBtn = document.getElementById("colorMode");
let rnbwModeBtn = document.getElementById("rnbwMode");
let eraserModeBtn = document.getElementById("eraserMode");
let clearBtn = document.getElementById("clearBtn");
colorModeBtn.classList.add("activeBtn");
slider.value = size;
output.innerHTML = `${size}x${size}`;

slider.oninput = (e) => sliderChange(e.target.value);
colorPicker.onchange = (e) => currentColor = e.target.value;
colorModeBtn.onclick = (e) => modeChange(e.target);
rnbwModeBtn.onclick = (e) => modeChange(e.target);
eraserModeBtn.onclick = (e) => modeChange(e.target);
clearBtn.onclick = (e) => resizeGrid(size);

window.onload = () => {
  resizeGrid(size);
  modeChange(colorModeBtn)
}