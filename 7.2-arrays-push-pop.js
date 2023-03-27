/* 
  Warm-up
  1. Create a global variable called favFoods and assign it to be an array strings that are your top three favorite foods.
  2. Use console.log() to print out each element to the console individually
*/
var favFoods = ["tamales", "tacos", "pozole"];
console.log(favFoods[0]);
console.log(favFoods[1]);
console.log(favFoods[2]);
console.log(typeof(favFoods));
// Length property examples
console.log(favFoods.length);
console.log(favFoods[3]);


// .push() examples
favFoods.push("wings")
console.log(favFoods);

// .pop() examples
var lastItem = favFoods.pop();
console.log(lastItem);
console.log(favFoods);

var daysOfWeek = [];

function problem1(){
 daysOfWeek.push("Monday");
 daysOfWeek.push("Tuesday");
 daysOfWeek.push("Wednesday");
 daysOfWeek.push("Thursday");
 daysOfWeek.push("Friday");
 daysOfWeek.push("Saturday");
 daysOfWeek.push("Sunday");
 printDays();
 var lastItem = daysOfWeek.pop();
 var lastItem = daysOfWeek.pop();
 var weekend = [];
 weekend.push("Saturday");
 console.log(weekend);
 printDays();
 console.log(weekend[0]);
 console.log(weekend[1]);
}

function printDays () {
  console.log(daysOfWeek[0]);
  console.log(daysOfWeek[1]);
  console.log(daysOfWeek[2]);
  console.log(daysOfWeek[3]);
  console.log(daysOfWeek[4]);
  console.log(daysOfWeek[5]);
  console.log(daysOfWeek[6]);

}