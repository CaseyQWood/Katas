const squareCode = function(message) {
let replaceAll = / /gi
let allTogether = message.replace(replaceAll, '')
let lengthOfInput = allTogether.length
let lengthOfLine = Math.ceil(Math.sqrt(lengthOfInput)) + 1
let array = allTogether.split('')
let runTime = Math.round((lengthOfInput / lengthOfLine) + 1)

for ( i = 0; i < runTime; i++){
let newStep = (lengthOfLine * i) 
array.splice(newStep, 0, '\n' )

}


let answer = []
let string = array.join('').split('\n')

for (let y = 1; y < string.length; y++){
  for(let z = 0; z < string.length; z++){
    answer[z] = answer[z] ? answer[z] : ""
    answer[z] += string[y].charAt(z) 
  }
}
return answer.join(' ')

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

