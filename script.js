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
  if (colorMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  }
}

resizeGrid(size);

let slider = document.getElementById("gridSize");
let output = document.getElementById("slider-value");
slider.value = size;
output.innerHTML = `${size}x${size}`;

slider.oninput = (e) => {
  let output = document.getElementById("slider-value");
  output.innerHTML = `${e.target.value}x${e.target.value}`;
  resizeGrid(e.target.value);
}