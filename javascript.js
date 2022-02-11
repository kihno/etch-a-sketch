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

let mode = black;
blackButton.addEventListener('click', () => {
    mode = black;
    paint();
});

colorButton.addEventListener('click', () => {
    mode = color;
    paint();
});

greyButton.addEventListener('click', () => {
    mode = grey;
    paint();
});

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

function paint() {
    const cells = gridContainer.querySelectorAll('div');

    switch(mode) {
        case black:
            cells.forEach(cell => cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = '#000000';
            }));
            break;
        case color:
            cells.forEach(cell => cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = randomColor();
            }));
            break;
        case grey:
            const greyscale = ['#e5e5e5', '#cccccc', '#b2b2b2', '#999999', '#7f7f7f', '#666666', '#4c4c4c', '#333333', '#191919', '#000000'];
            
                cells.forEach(cell => cell.addEventListener('mouseover', (e) => {
                    cell.style.backgroundColor = '#000';
                    if (!e.target.style.opacity) {
                        e.target.style.opacity = 0.2;
                    } else {
                        let shade = Number(e.target.style.opacity) + 0.1;
                        e.target.style.opacity = shade;
                    }
                }));
            
            break;
    }
    
};

/* colorButton.addEventListener('click', () => {
    paintColor();
}) */

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

/*function paint() {
    const cells = gridContainer.querySelectorAll('div');

    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = '#000000';
    }));
}; */

document.onload = 
    
    createGrid(slider.value);
    sliderValue.textContent = slider.value + " x " + slider.value;
    paint();