// function expression catSays
/* function catSays(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));

var laugh = function(num){
  var laughText="";
  for (let i=0;i<num;i++){
      laughText+="ha";
  }
  return laughText+"!";
}

console.log(laugh(3));*/
/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
/*var laugh = function(num){
  var laughText="";
  for (let i=0;i<num;i++){
      laughText+="ha";
  }
  return laughText+"!";
}
function emotions(myString,myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy",function laugh (num){
  var laughText="";
  for (let i=0;i<num;i++){
      laughText+="ha";
  }
  return laughText+"!";
});

// your code goes here

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression



const chooseStations  = function(stationArray){
  let goodStations = [ ];
  for ( let eachStation of stationArray ) {
    if ( (  eachStation[1]  >=  20) &&  ( eachStation[2] === "school" ||  eachStation[2]  === "community centre"  ) )
      goodStations.push (  eachStation[0]  );
  }
  return goodStations;
}
const stations = [
['Big Bear Donair', 10, 'restaurant'],
['Bright Lights Elementary', 50, 'school'],
['Moose Mountain Community Centre', 45, 'community centre']
];
console.log ( chooseStations  ( stations  ) );


const finalPosition = function (moves) {
  let moveArray=[0,0];
  for(let pos of moves)
    {
        switch(pos)
        {
          case "north"  :
            moveArray[1]++;
            break;
          case "south"  :
            moveArray[1]--;
            break;
          case "east"  :
            moveArray[0]++;
            break;
          case "west"  :
            moveArray[0]--;
            break;
        }
    }
    return moveArray;
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
const ageCalculator = function (name,yearOfBirth,currentYear){
  const age = currentYear-yearOfBirth;
  return name + " is "  + age + " years old.";
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

const howManyHundreds = function (num){
  return Math .floor(num / 100);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);*/

const calculateRectangleArea  = function (length, width){
  let area;
  if (  ! (length  < 0 || width <  0))
  {
    area  = length * width;
  }
  
  return area;
}

const calculateTriangleArea  = function (base, height){
  let area;
  if (  ! (base  < 0 || height < 0))
  {
    area  = (base * height) / 2;
  }
  return area;
}
const calculateCircleArea  = function (radius){
  let area;
  if (  ! (radius<0 ))
  {
    area  = Math.PI * radius  * radius;
    
  }
  return area;
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

var array1=["glaxed",2,3];
console.log(array1[0]);

console.log(array1[0][1]);

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
const crew =[captain,second,pilot,companion,mercenary,mechanic];
console.log(crew);
var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(donuts);

// your code goes here
const hasEnoughPlayers= function (teamarray)
{
  return teamarray.length >= 7?true:false;
 

}

var team = ["Oliver Wood","Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `bills` and `totals`
 * - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
 * - Your `totals` array should be an array of numbers
 * - Your code should print the `totals` array to the console
 * - The output must be as described above. 
 */

 var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
let totals=bills.map(function totalArray(arrayValue){
  return Number(((arrayValue*.15)+arrayValue).toFixed(2));
})
console.log(totals);


var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (let i=0;i<numbers.length;i++){
  for (let j=0;j<numbers[i].length;j++)
  {
     numbers[i][j]= (numbers[i][j]%2===0)?"even":"odd";
  }
}
console.log (numbers);