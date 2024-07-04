const container = document.getElementById("container");
const resetButton = document.getElementById("reset-button");

//function to create the grid
function createGrid(numSquares) {
    container.innerHTML = "";

    const squareSize = 960 / numSquares;

    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);

        //hover effect
        square.addEventListener("mouseover", function() {
            const randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
            square.style.backgroundColor = randomColor;
            darkenSquare(square);
        })
    }
    container.style.width = "960px";
}

//function to darken the square progressively
function darkenSquare(square) {
    let opacity = parseFloat(square.style.opacity) || 0.1;
    if (opacity < 1) {
        square.style.opacity = opacity + 0.1;
    }
}

createGrid(16);

//reset button functionality
resetButton.addEventListener("click", function() {
    let numSquares = prompt("Enter number of squares per side (max 100):");
    numSquares = parseInt(numSquares);
    if (numSquares && numSquares > 0 && numSquares <= 100) {
        createGrid(newSquares);
    } else {
        alert("Please enter a valid number between 1 and 100.")
    }
})