const prompt = require('prompt-sync')();

// This javascript function will greet the user


// function greet(){
//     console.log("Welcome to javascript");
// }
// console.log("outside the function");
// greet();

var sum1=Number( prompt("please enter the number: "));
var sum2=Number(prompt("please enter the number: "));


function add(){
    console.log(sum1+sum2);
}
function substract(){
    console.log(sum1-sum2);
}
function multiply(){
    console.log(sum1*sum2);
}
function divide(){
    console.log(sum1/sum2);
}

add();
substract();
multiply();
divide();

