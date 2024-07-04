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
            newGridSquare.style.height = `${90/numSquares}vh`;
            newGridSquare.style.width = `${90/numSquares}vh`;
            newRow.appendChild(newGridSquare);
        }
        container.appendChild(newRow);
    }
}