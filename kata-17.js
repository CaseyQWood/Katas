const urlDecode = function(text) {
let object = {

}
let replaceGlobal = /%20/gi
text.replace(replaceGlobal, ' ')
console.log(text)
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);