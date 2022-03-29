var itemCounter = 5;

var addItem = function () {
  itemCounter++;
  var newItem = document.createElement("li");
  newItem.innerHTML = "Item " + itemCounter;
  console.log(itemCounter);
  document.getElementById("ul").appendChild(newItem);
};

var buttonClicked = document
  .getElementById("add-item")
  .addEventListener("click", addItem);
