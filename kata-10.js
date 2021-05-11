const multiplicationTable = function(maxValue) {
  let answer = '\n'
  for (let i = 1; i < maxValue + 1; i ++){
    // let trueStep = i + 1
    for (let x = 1; x < maxValue + 1; x++){
    answer += (i*x) + ''
    }
    answer += '\n'
  }
  return answer
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));