const makeCase = function(input, theCase) {
let answer = input
let cases = typeof theCase === 'string' ? [theCase] : theCase

for(let x = 0; x < cases.length; x++){

  switch (cases[x]) {
    case 'camel':
      let split = answer.split(' ')
      for(let i = 0; i < split.length; i ++){
        if (i != 0){
          split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1)
        }
      }
      answer = split.join('')

      break;
    case 'pascal':
      let cut = answer.split(' ')
      for(let i = 0; i < cut.length; i ++){
          cut[i] = cut[i].charAt(0).toUpperCase() + cut[i].slice(1)
      }
      answer = cut.join('')

      break;
    case 'snake':
      let globalSpace1 = / /gi
      let snake = answer.replace(globalSpace1 , '_')
      answer = snake

      break;
    case 'kebab':
      let globalSpace2 = / /gi
      let kebab = answer.replace(globalSpace2 , '-')
      answer = kebab

      break;
    case 'title':
      let title = answer.split(' ')
      for(let i = 0; i < title.length; i ++){
          title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1)
      }
      answer = title.join(' ')

      break;
    case 'vowel':
      let answerList = ['a', 'e', 'i', 'o', 'u']
      let array = [...answer]
      for( let i = 0; i < array.length; i++){
        if(answerList.includes(array[i])) {
          array[i] = array[i].toUpperCase()
        }
      }
      answer = array.join('')
      
      break;
    case 'consonant':
      let answerList2 = ['a', 'e', 'i', 'o', 'u']
      let array2 = [...answer]
      for( let i = 0; i < array2.length; i++){
        if(!answerList2.includes(array2[i])) {
          array2[i] = array2[i].toUpperCase()
        }
      }
      answer = array2.join('')

      break;
    case 'upper':
      answer = answer.toUpperCase()
      break;
    }
  }
return answer
}





console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));