const conditionalSum = function(values, condition) {
    if (condition === 'even'){
        var evenSum = 0
        for(let i = 0; i < values.length; i++){
            if(values[i] % 2 === 0){
                evenSum = evenSum + values[i]
            }
        }
        return evenSum
    }
    else if(condition === 'odd'){
        var oddSum = 0
        for ( let x = 0; x < values.length; x++){
            if(values[x] % 2 != 0){
                oddSum = oddSum + values[x]
            }
        }
        return oddSum
    }
    else{return 0}
  };
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));