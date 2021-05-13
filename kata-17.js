const urlDecode = function(text) {
let object = {
}
// my container

let replaceGlobal = /%20/gi
let newText = text.replace(replaceGlobal, ' ')
// replaces %20 with white space

let trueText = newText.split('&')
//splits the text input at the & returning arrays

for(let y = 0; y < trueText.length; y++){
// looping through the arrays returned from trueText
  var split = trueText[y].split('=')
  // item[y] from the trueText array then splitting at the = returning an array of two items 
  object[split[0]] = split[1]
  // assigning the first index as the object key and the second index as the data for the key 
}

return object
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);