
let randomNum = Math.round((Math.random() * 10))
let repeats = []
let wrongAttempts = []

while(true){
let prompt = require("prompt-sync")();
let answer = prompt("Guess a number: ") ;

for(i = 0; i < repeats.length; i++){      
  if(repeats[i].includes(answer)){
    wrongAttempts.push(answer)
  }
}

if(typeof answer < 0 || answer >= 0 ){
  if (answer < randomNum){
    repeats.push(answer)
    console.log(`Your guess of ${answer} is too low`)
}
else if(answer > randomNum){    
  repeats.push(answer)
  console.log(`Your guess of ${answer} is too high`)
}
else{
  repeats.push(answer)
  console.log(`This answer is correct! it took you ${repeats.length - wrongAttempts.length} attempts`)
  break
}
}
else {
  console.log('this is not a number')
}
}

