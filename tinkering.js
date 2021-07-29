// function expression catSays
 function catSays(max) {
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

console.log(laugh(3));
