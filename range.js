
function validate(first,second,third){
  if((first === undefined || second === undefined || third=== undefined) || (first>second) || third <= 0)
  return false;
  else
  return true;
}
 function range(start,end,step){
  let finalArray  = [];
if (validate(start,end,step)){
  for (let i  = start;i  <=  end;i = i+step){
  
  finalArray.push(i);
  }

}
return finalArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));