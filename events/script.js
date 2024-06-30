function addDiv() {
    const container = document.querySelector("#container");
    const newDiv = document.createElement("div");
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    newDiv.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, 1)`;
    newDiv.style.height = "50px";

    container.appendChild(newDiv);
}

const addDivButton = document.querySelector("#btn");
addDivButton.addEventListener("click", addDiv);