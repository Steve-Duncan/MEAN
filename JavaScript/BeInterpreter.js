//Problem 1:
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

//undefined
//Yippee I was first!

//////////////////////////////////////////////////
//Problem 2:
var food;
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}

var food = "Chicken";
eat();
console.log(food);

//half-chicken
//gone
//Chicken
/////////////////////////////////////////////////
//Problem 3:
var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word);

//NEW!

