const instructorWithLongestName = function(instructors) {
    var winner = instructors[0]
    for ( let i = 0; i < instructors.length; i++){
        if (instructors[i].name.length > winner.name.length){
            winner = instructors[i]
        }
    }
    return winner
  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));