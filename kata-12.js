const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let finalRecipe = {
    name: '',
  }
  for( let i = 0; i < bakeryA.length; i++){
    for( let y = 0; y < recipes.length; y++){
      if (bakeryA[i] === recipes[y].ingredients[0] || bakeryA[i] === recipes[y].ingredients[1]){
        for( let z = 0; z < bakeryB.length; z++){
          for( let q = 0; q < recipes.length; q++){
            if (bakeryB[z] === recipes[q].ingredients[0] || bakeryB[z] === recipes[q].ingredients[1]){
              finalRecipe.name = recipes[q].name

            }
          }  
        }    
      }
    }
  }
return finalRecipe.name
}

// loop through a bakeries ingredients and check if there is a reciepie that has a ingrdient,
// if it does check if the other ingredient is in the other bakerys list
// if both are true push to object containter


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));