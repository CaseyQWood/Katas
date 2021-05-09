const numberOfVowels = function(data) {
   var final = 0
   const vowels = ['a', 'e', 'i', 'o', 'u']
   for (let i = 0; i < data.length; i++){
       if ( vowels.includes(data.charAt(i)) ){
           final = final + 1
       }
   }
   return final 
  };
  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));
  