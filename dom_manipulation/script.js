const container = document.querySelector("#container");

const description = document.createElement("div");
description.classList.add("description");
description.textContent = "Description of webpage here";

container.appendChild(description);

//DOM Manipulation Exercise 01
const redP = document.createElement("p");
redP.style.color = "red";
redP.textContent = "Hey I'm red!";
container.appendChild(redP);

//DOM Manipulation Exercise 02
const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!";
container.append(blueH3);

//DOM Manipulation Exercise 03
const blackPinkDiv = document.createElement("div");
blackPinkDiv.style.backgroundColor = "pink";
blackPinkDiv.style.borderColor = "black";
blackPinkDiv.style.borderWidth = "3";
blackPinkDiv.style.borderStyle = "solid";

const nestedH1 = document.createElement("h1");
nestedH1.textContent = "I'm in a div";
blackPinkDiv.appendChild(nestedH1);

const nestedP = document.createElement("p");
nestedP.textContent = "ME TOO!";
blackPinkDiv.appendChild(nestedP);

container.appendChild(blackPinkDiv);