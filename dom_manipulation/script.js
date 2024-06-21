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