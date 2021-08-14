const loopyLighthouse = function (range, multiples, words){
  const mult1 = Number(multiples[0]),
    mult2 =  Number(multiples[1]),
    word1 = words[0],
    word2 = words[1];
  for (var i  = Number(range[0]);i  <=  Number(range[1]);i  ++)
  {
   
    console.log((i  % mult1 === 0)  &&  (i  % mult2 === 0)  ? word1 + word2 : i % mult1 === 0 ? word1 :  i % mult2  === 0 ?  word2 :  i);
  }
};

loopyLighthouse([100, 290], [3, 7], ["triple", "seven"]);
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);