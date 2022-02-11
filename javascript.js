// Variables
const gridContainer = document.querySelector('#grid');
const blackButton = document.querySelector('#black');
const colorButton = document.querySelector('#color');
const greyButton = document.querySelector('#grey');
const clear = document.querySelector('#clear');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');

// Slider
slider.oninput = function() {
    sliderValue.textContent = this.value + " x " + this.value;
    removeCells();
    createGrid(this.value);

    paint();
}

//Clear Button
clear.addEventListener('click', () => {
    removeCells();
    createGrid(slider.value);
    paint();
});

//Color Button
function paintColor() {
    const cells = gridContainer.querySelectorAll('div');

    cells.forEach(cell => cell.addEventListener('mouseover'), () => {
        cell.style.backgroundColor = 'red';
    });
};

colorButton.addEventListener('click', () => {
    paintColor();
})

//Sketch Grid
function createGrid(x) {

    for (let i = 0; i < x * x; i++) {
        const createCell = document.createElement('div');
        createCell.className = 'cell';
        gridContainer.appendChild(createCell);
    }
    gridContainer.style.grid = `repeat(${x}, 1fr) / repeat(${x}, 1fr)`;
};

function removeCells() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function paint() {
    const cells = gridContainer.querySelectorAll('div');

    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = '#000000';
    }));
};

document.onload = 
    createGrid(slider.value);
    sliderValue.textContent = slider.value + " x " + slider.value;
    paint();