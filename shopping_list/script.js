const itemList = document.querySelector("ul");
const itemInput = document.querySelector("input");
const addItemButton = document.querySelector("button");

function addItem() {
    //Logic to retrieve input value
    const newItem = itemInput.value;
    itemInput.value = '';
}