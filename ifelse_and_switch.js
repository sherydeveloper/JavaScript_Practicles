// let age = prompt("Enter Your age");

// if(age >= 18){
//     console.log("You are ready to cast the vote");
// }else{
//     console.log("You are too Young to cast the vote")
// }

//Using Else if Statements

// let day = prompt("Enter the day");

// if(day == 1){
//      
// }else if(day == 2){
//     console.log("Tuesday")
// }else if(day == 3){
//     console.log("Wednesday")
// }else if(day == 4){
//     console.log("Thursday")
// }else if(day == 5){
//     console.log("Friday")
// }else if(day == 6){
//     console.log("Saturday")
// }else if(day == 7){
//     console.log("Sunday")
// }else{
//     console.log("Invalid Input")
// }

// Using Switch 
// let day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }


let x = 9;
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
document.getElementById("demo").innerHTML = text;