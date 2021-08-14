const merge = function (array1,array2){
  let arrayFinal  = [];
  for (let elm of array1){
    arrayFinal.push(elm);
  }
  for (let elm2 of array2){
    arrayFinal.push(elm2);
  }

 return arrayFinal.sort((a, b) => a - b);
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);