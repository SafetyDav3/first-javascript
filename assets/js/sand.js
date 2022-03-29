var itemCounter = 5;

var addItem = function () {
  itemCounter++;
  console.log(itemCounter);
  var newItem = document.createElement("li");
  newItem = document.createTextNode("Item " + itemCounter);
  console.log(newItem);
  document.getElementById("main-list").appendChild(newItem);
};

var buttonClicked = document
  .getElementById("add-item")
  .addEventListener("click", addItem);
