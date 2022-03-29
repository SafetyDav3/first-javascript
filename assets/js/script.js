// ←←← If, Else if, Else →→→

// * Indent nesting?

// ←←← Array →→→

// * Uses zero indexing
var myAry = [
  1,
  8,
  26,
  "Gary",
  14,
  15,
  49,
  "Puddle of Mud 🤣",
  78,
  31,
  25,
  true,
  34,
];

var names = [
  "Big Dog",
  "Lil' Dog",
  "Peeps",
  "Spiderz",
  "Runs Slow",
  "Flylow",
  "String Bean",
  "Skinny Pete",
  "Fats McPete",
  "Fast Pete",
  "Just Pete",
];

var themAge = [25, 20, 85, 98, 16, 19, 76, 04, 09, 13, 65, 11];

// ↓↓↓ Legal age for region. ↓↓↓
var drinkingAge = 21;
var ratedRAge = 17;

for (var i = 0; i < names.length; i++) {
  console.log(names[i] + " - " + themAge[i] + ",");

  // ↓↓↓ Lets see if they can come in here. ↓↓↓
  if (themAge[i] >= drinkingAge) {
    console.log("You can drink beer and watch R rated movies! Come right in!");
  } else if (themAge[i] <= drinkingAge && themAge[i] >= ratedRAge) {
    console.log("You can see R rated movies, but no drinks! So kick rocks!");
  } else {
    console.log("No movies no drinks! GET OUT!!!");
  }
}
