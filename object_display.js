const car = {
    name : "Civic",
    color : "Black",
    model : 2020, 
    company : "Honda"
}

let myString = JSON.stringify(car)
console.log(car)
console.log(myString)
console.log(typeof(myString))
// let text = ""
// for (let i in car) {
//     text += car[i] + " ";
    
// }
// document.getElementById('demo').innerHTML = text;

// let myArray = Object.values(car)

// document.getElementById('demo').innerHTML = myArray;
// console.log(car)
// console.log(myArray)

// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "<br>";
// }
// document.getElementById('demo').innerHTML = text;

