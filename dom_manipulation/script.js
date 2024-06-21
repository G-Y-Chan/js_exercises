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