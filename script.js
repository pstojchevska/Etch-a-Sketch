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