var user = {
  email: "user@example.com",
  firstName: "first",
  lastName: "last"
};
console.log(user.email);
console.log(user["email"]);
/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
  printAccountSummary: function (){
      return "Welcome!\nYour balance is currently $"+savingsAccount.balance+" and your interest rate is "+savingsAccount.interestRatePercent+"%.";
  }
};

console.log(savingsAccount.printAccountSummary());
let facebookProfile={
  name:"nayan",
  friends:10000,
  messages:["HI There!","How are you doing","Whatz up","Hello Friends"],
  postMessage:function(string){
    facebookProfile.messages.push(string);
  },
  deleteMessage:function(index){
    facebookProfile.messages.splice(index,1);
  },
  addFriend:function (){
    facebookProfile.friends++;
  },
  removeFriend:function (){
    facebookProfile.friends--;
  }  
};


 

/*
 * QUIZ REQUIREMENTS
 * - Your code sshould have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 * Jelly donuts cost $1.22 each
 */

// This is an array of objects. 
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(function (car){
console.log(car.type+" donuts cost $"+car.cost+" each");
})
console.log(donuts);

const smartGarbage = function (trash, bins) {
  if (bins[trash])
  {
  bins[trash]=bins[trash]+1;
  }
  return bins;

}
console.log(smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 }));

//Complete the logic in the function carPassing.Adding a new object instance to an  array
const carPassing = function (cars, speed) {
let car = {
  time:Date.now(),
  speed:speed
}
cars.push(car);

}
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
const speed = 38

carPassing(cars, speed)
console.log(cars);
//Complete the logic in the function judgeVegetable.


   const judgeVegetable=function (vegetables, metric){
     let maximum=vegetables[0][metric];
     let submitter=vegetables[0]["submitter"];
     
     
     for (let i =0;i<vegetables.length;i++){
     if(vegetables[i][metric]>maximum)
     {
        maximum=vegetables[i][metric];
        submitter=vegetables[i]["submitter"];
     }

     }
    return submitter;

   }


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));
