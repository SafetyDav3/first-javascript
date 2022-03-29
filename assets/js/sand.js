var itemCounter = 5;

var addItem = function () {
  itemCounter++;
  console.log(itemCounter);
};

var buttonClicked = document
  .getElementById("add-item")
  .addEventListener("click", addItem);
