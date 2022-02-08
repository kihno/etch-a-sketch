// Variables
const gridContainer = document.querySelector('#grid');
const buttonOne = document.querySelector('.button1');
const buttonTwo = document.querySelector('.button2');
const clear = document.querySelector('.clear');


/* buttonOne.addEventListener('click', () => {
    createGrid(32);
});

buttonTwo.addEventListener('click', () => {
    createGrid(64);
});
*/

function removeCells() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

clear.addEventListener('click', () => {
    removeCells();
    let num = prompt('How many rows would you like?');
    if (num < 0 || num > 100 ) {
        num = prompt('Please specify a number between 0 and 100');
    }
    createGrid(num);
    
    const cells = gridContainer.querySelectorAll('div');
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = '#000000';
}));
})

function createGrid(x) {

    for (let i = 0; i < x * x; i++) {
        const createCell = document.createElement('div');
        createCell.className = 'cell';
        gridContainer.appendChild(createCell);
    }
    gridContainer.style.grid = `repeat(${x}, 1fr) / repeat(${x}, 1fr)`;
};

document.onload = createGrid(16);

const cells = gridContainer.querySelectorAll('div');
cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.style.backgroundColor = '#000000';
}));