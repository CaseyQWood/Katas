const calculateChange = function(total, cash) {
  let change = cash - total
  
  let fiat = {
    twenty : 2000,
    ten : 1000,
    five : 500,
    two : 200,
    one : 100,
    quarter : 25,
    dime : 10,
    nickel : 5,
    penny : 1,
   }
   let changeOwed = {
    twenty : 0,
    ten : 0,
    five : 0,
    two : 0,
    one : 0,
    quarter : 0,
    dime : 0,
    nickel : 0,
    penny : 0,
   }
   
   for (let i = 0; i < Object.keys(fiat).length; i++){
     changeOwed[Object.keys(changeOwed)[i]] = Math.round(change / fiat[Object.keys(fiat)[i]])
     // Object.keys is making an array of the keys and I am calling the index of the arry with [i]
     change = change % fiat[Object.keys(fiat)[i]]
   }
   
return changeOwed
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

