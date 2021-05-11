const camelCase = function(input) {
  let split = input.split(' ')
  for(let i = 0; i < split.length; i ++){
    if (i != 0){
      split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1)
    }
  }
  return split.join('')
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));