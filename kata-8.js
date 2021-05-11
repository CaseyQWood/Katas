const repeatNumbers = function(data) {
let finalAnswer = []
  for (let i = 0; i < data.length; i++){
  let victim = data[i][0].toString()
  let annoying = data[i][1]
  let answer = victim.repeat(annoying)
  finalAnswer.push(answer)
  }
return finalAnswer
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// first value is what is repeated and the second is the amount of times
// return a string, 
// if multiple returns seperate by comma