



//Role picker
var myArray = [
  "Pickles",
  "Nutella",
  "Peanut Butter",
  "Relish",
  "Ketchup",
  "Cheese",
  "Mayo",
  "Eggs",
  "Pepper",
  "Lettuce",
];
//randomizer
var food1 = myArray[Math.floor(Math.random()*myArray.length)];
var food2 = myArray[Math.floor(Math.random()*myArray.length)];
var food3 = myArray[Math.floor(Math.random()*myArray.length)];
var food4 = myArray[Math.floor(Math.random()*myArray.length)];



function shit() {
  document.getElementById("1").innerHTML = food1;
  one()
}

function one() {
  document.getElementById("2").innerHTML = food2;
  two()
}

function two() {
  document.getElementById("3").innerHTML = food3;
  three()
}

function three() {
  document.getElementById("4").innerHTML = food4;
}
