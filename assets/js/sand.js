var itemCounter = 5;

var addItem = function () {
    itemCounter++;
    var newItem = document.createElement("li");
    newItem.className = "the-items"
    newItem.innerText = "Item " + itemCounter;
    document.getElementById("main-list").appendChild(newItem);
};

var buttonClicked = document
    .getElementById("add-item")
    .addEventListener("click", addItem);