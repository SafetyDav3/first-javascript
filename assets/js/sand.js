
// Count the items on the screen and add it to text display
var itemCounter = 0;

// Add item and pas this function to 'buttonClicked'
var addItem = function () {
    itemCounter++;
    var newItem = document.createElement("li");
    newItem.className = "the-items"
    newItem.innerText = "Item " + itemCounter;
    document.getElementById("main-list").appendChild(newItem);
};


// Click button to add item with the addItem function
var buttonClicked = document
    .getElementById("add-item")
    .addEventListener("click", addItem);