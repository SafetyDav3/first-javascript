var itemCounter = 5;

var addItem = function () {
    itemCounter++;
    console.log(itemCounter);
    var newItem = document.createElement("li");
    newItem.className = "the-items"
    newItem.innerText = "Item " + itemCounter;
    console.log(newItem);
    document.getElementById("main-list").appendChild(newItem);
};

var buttonClicked = document
    .getElementById("add-item")
    .addEventListener("click", addItem);