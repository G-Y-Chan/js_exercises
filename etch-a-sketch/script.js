let mouseDown = false;
function createCanvas(numSquares) {
    const container = document.querySelector("#container");
    for (i = 0; i < numSquares; i++) {
        const newRow = document.createElement("div");
        newRow.style.display = "flex";
        newRow.style.flexDirection = "row";
        newRow.style.gap = "1px";
        for (j = 0; j < numSquares; j++) {
            const newGridSquare = document.createElement("div");
            newGridSquare.classList.add("gridSquare");
            newGridSquare.style.backgroundColor = "lightgrey";
            newGridSquare.addEventListener("mouseover", () => colorSquare(newGridSquare));
            newGridSquare.style.height = `${80/numSquares}vh`;
            newGridSquare.style.width = `${80/numSquares}vh`;
            newRow.appendChild(newGridSquare);
        }
        container.appendChild(newRow);
    }
}

//Initialise a 16x16 canvas when page first loads
function init() {
    createCanvas(16);
}

init();

//Function to create new canvas
function createNewCanvas(numSquares) {
    const container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createCanvas(numSquares);
}

//Function to ask user for number of squares per side
function getUserInput() {
    let numSquares = prompt("Enter number of squares: ");
    createNewCanvas(numSquares);
}

//Function to change the color of grid squares
function colorSquare(square) {
    if (mouseDown) square.style.backgroundColor = "#313638";
}

//Add event listener to container div
const container = document.querySelector("#container");
container.addEventListener("mousedown", () => {
    mouseDown = true;
});
container.addEventListener("mouseup", () => {
    mouseDown = false;
});