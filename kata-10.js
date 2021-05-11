const multiplicationTable = function(maxValue) {
  let answer = ''
  // setting empty variable as a container
  for (let i = 1; i < maxValue + 1; i ++){
  // loop to create the number of rows and number for each row to multiply by
    for (let x = 1; x < maxValue + 1; x++){
    // second loop creates the numbers to mutiply the rows by
    answer += `${i*x} `
    // sets the math for each step to give the mutiplication and sets it as a string so each input is not added mathicatically to the last
    }
    answer += '\n'
    // creates the space after each row is iterated through
  }
  return answer
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));