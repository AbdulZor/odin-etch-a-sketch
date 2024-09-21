// Problem: create a grid composed of 16x16 square divs
// Plan: loop 16 times and add a new square to the grid.
//       and have the height be (height/16) and width be 
//       (width/16).
// Pseudocode:
//          OUTER LOOP i=0; i < 16; i++ (vertical squares)
//              INNER LOOP i=0; i < 16; i++ (horizontal squares)
//                  create new element 'div'
//                  style height (grid.height/16 - 2px border)
//                  style width (width.width/16 - 2px border)
//                  style border black 1px solid
//                  append element to grid node

function createGrid(gridSize) {
    const grid = document.querySelector('.grid');

    for (let i = 0; i < gridSize; i++) {
        for (let i = 0; i < gridSize; i++) {
            const squareDiv = document.createElement('div');
            const borderSize = getComputedStyle(grid, null).borderLeftWidth.slice(0, -2); // get only number (exclude 'px')

            squareDiv.style.width = '' + (grid.offsetWidth / gridSize) - (borderSize * 2 / gridSize) + 'px';
            squareDiv.style.height = '' + (grid.offsetWidth / gridSize) - (borderSize * 2 / gridSize) + 'px';
            squareDiv.style.border = 'solid 1px black';

            squareDiv.addEventListener('mouseover', () => {
                console.log('hovered over grid square!');
                squareDiv.className = 'color';
            });

            grid.appendChild(squareDiv);
        }
    }
}

function clearGrid() {
    const grid = document.querySelector('.grid');
    grid.replaceChildren();
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const input = prompt('Grid Size (max 100):');

    if (input <= 0 || input >= 100) {
        console.log("Grid size is negative or bigger than 100");
        return;
    }

    clearGrid();
    createGrid(input);
});

createGrid(16);