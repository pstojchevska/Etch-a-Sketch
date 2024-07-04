const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');

// function to create the grid
function createGrid(numSquares) {
    // Clear existing grid
    container.innerHTML = '';

    // calculate square size based on available space
    const containerSize = Math.min(window.innerWidth * 0.80, window.innerHeight * 0.80); // 80% of viewport size
    const squareSize = containerSize / numSquares;

    // create grid squares
    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);

        // hover effect
        square.addEventListener('mouseover', function() {
            const randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            square.style.backgroundColor = randomColor;
            darkenSquare(square);
        });
    }

    // set container dimensions
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;
}

// function to darken the square progressively
function darkenSquare(square) {
    let opacity = parseFloat(square.style.opacity) || 0.1;
    if (opacity < 1) {
        square.style.opacity = opacity + 0.1;
    }
}

// initial grid creation
createGrid(16);

// reset button functionality
resetButton.addEventListener('click', function() {
    let numSquares = prompt('Enter number of squares per side (max 100):');
    numSquares = parseInt(numSquares);
    if (numSquares && numSquares > 0 && numSquares <= 100) {
        createGrid(numSquares);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

// adjust grid on window resize
window.addEventListener('resize', function() {
    createGrid(document.querySelectorAll('.square').length ** 0.5);
});
