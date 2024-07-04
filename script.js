const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

// Function to create the grid
function createGrid(numSquares) {
    // Clear existing grid
    container.innerHTML = '';

    // Calculate square size
    const squareSize = 960 / numSquares;

    // Create grid squares
    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);

        // Hover effect
        square.addEventListener('mouseover', function() {
            const randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            square.style.backgroundColor = randomColor;
            darkenSquare(square);
        });
    }

    // Set container width explicitly
    container.style.width = '960px';
}

// Function to darken the square progressively
function darkenSquare(square) {
    let opacity = parseFloat(square.style.opacity) || 0.1;
    if (opacity < 1) {
        square.style.opacity = opacity + 0.1;
    }
}

// Initial grid creation
createGrid(16);

// Reset button functionality
resetButton.addEventListener('click', function() {
    let numSquares = prompt('Enter number of squares per side (max 100):');
    numSquares = parseInt(numSquares);
    if (numSquares && numSquares > 0 && numSquares <= 100) {
        createGrid(numSquares);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});
