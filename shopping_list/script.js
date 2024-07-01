const itemList = document.querySelector("ul");
const itemInput = document.querySelector("input");
const addItemButton = document.querySelector("button");

function addItem() {
    //Logic to retrieve input value
    const newItem = itemInput.value;
    itemInput.value = '';

    //Check for empty inputs
    if (newItem === '') return;

    //Create new list item
    const newListItem = document.createElement("li");

    //Span to contain input value
    const newSpan = document.createElement("span");
    newSpan.textContent = newItem;

    //Delete button for list item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    newListItem.appendChild(newSpan);
    newListItem.appendChild(deleteButton);

    itemList.appendChild(newListItem);

    deleteButton.addEventListener("click", () => itemList.removeChild(newListItem));
}

addItemButton.addEventListener("click", addItem);