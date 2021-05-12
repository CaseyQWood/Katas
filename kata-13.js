const talkingCalendar = function(date) {
var numerical = date.split('/')
let month = numerical[1]
let year = numerical[0]
let day = Math.round(numerical[2])

if (day == 1 || day == 21 || day == 31){
  day += 'st'
}
else if(day == 2 || day == 22){
  day =+ 'nd'
}
else if(day == 3 || day == 23){
  day =+ 'rd'
}else{
  day += 'th'
}

function whatMonth(month){
var engMonth;
  switch (month) {
    case '01':
      return "January";
    case '02':
      return "February";
    case '03':
      return "March";
    case '04':
      return "April";
    case '05':
      return "May";
    case '06':
      return "June";
    case '07':
      return "July";
    case '08':
      return "August";
    case '09':
      return "September";
    case  '10':
      return "October";
    case  '11':
      return "November";
    case  '12':
      return "December";
    default:
      console.log('shits fucked');
  }
}
return `${whatMonth(month) } ${day }, ${year} ` 
}

console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


