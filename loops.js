for (var i=100;i<=200;i++)
{
  
  console.log((i%3===0)&&(i%4===0)?"LoopyLighthouse":i%3===0?"Loopy":i%4===0?"Lighthouse":i);
}
const amounts = [61.00, 52.25, 112.99, 5.00]; 
let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

let total1 = 0;
for (let amount of amounts) {
  total1 += amount;
}
console.log('Order total is: ', total1); 

let total3 = 0;
for (let amount of amounts) {
  total3 += amount;
}
console.log('Order total is: ', total3);