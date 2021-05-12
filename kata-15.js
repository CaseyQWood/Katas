const organizeInstructors = function(instructors) {
  var lessons = {
    ios: [],
    web: [],
    blockchain: [],
  }
  
    for(let i = 0; i < instructors.length; i++){
    var lessonKeys = Object.keys(lessons)
    var course = instructors[i].course.toLowerCase()
    if( lessonKeys.includes(course) ){
      lessons[course].push(instructors[i].name)
    }

  }
  return lessons
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));