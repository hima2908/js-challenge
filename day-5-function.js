// day 5 : function

// Activity 1: function declaration

// task 1: to check if no is even or odd

function evenOdd() {

    let num = 10;  // in this ; semicolon is very important  without semicolon it show the error msg which error?  can not access 'num' befor initialization
    (num % 2 == 0) ? console.log("even") : console.log("odd")
}
evenOdd()

// task 2: to calculate the sq. of a number

function Square() {
    let num1 = 8
    num1 = num1 * num1
    console.log(num1);
}
Square()

// Activity 2 : Function expression 

// task 3: 

let maxNum = function () {

    let num1 = 50;
    let num2 = 30;
    let max = Math.max(num1, num2)
    console.log(max);
}
maxNum()

// task 4: to concatenate two strings

// using '+' operators

let concatinate = function () {

    let str1 = "himanshu "
    let str2 = "bokde"

    let result = str1 + str2
    console.log(result);
}
concatinate()

// using " concat() "

// let concatinate = function () {

//     let str1 = "himanshu "
//     let str2 = "nisha"

//     let result = str1.concat(str2)
//     console.log(result);
// }
// concatinate()

// using template literals

// let concatinate = function () {

//     let str1 = "himanshu "
//     let str2 = "diwakar bokde"

//     let result = `${str1}${str2}`
//     console.log(result);
// }
// concatinate()


// Activity 3: Arrow Functions

// task 5: to calculate the sum of two numbers

let sum = () => {
    let num1 = 10
    let num2 = 20
    let sum = num1 + num2
    console.log(sum);
}
sum()

// task 6 : to check if a string contains a specific charactor and return a boolean value.

let stringContain = () => {

    let str = "himanshu &"
    let charactor = "h"
    let result = str.includes(charactor)
    console.log(result);
}
stringContain()

//note:  indexOf() and match() is only used in typescript 




// Activity 4 : Function parameter and default values

// task 7 : function takes two parameters and return their products. provide default value for the second parameters

let multiply = function multiply(a, b = 5) {
    return a * b
}
console.log(multiply(2)); // with default value
console.log(multiply(2, 4)); // with both value

// task 8 : function that takes a person's name and age and return a greeting message. provide a default value for the age 

function greeting(name, age = 27) {
    // return console.log("greeting");
    return `hello ${name} ! you are ${age} year old `
}
console.log(greeting("himanshu")); // with default value in age
console.log(greeting("nisha", 21)); // without default value of age we pass the value to age  




// Activity 5 : Higher-Order functions 

// task 9: Higher-Order functions that takes a function and a number , and calls the function that many times.


function HigherOrder(func, number) {
    for (let i = 1; i <= number; i++) {
        func()
    }
}

function Sayhimanshu() {
    console.log("himanshu ");
}

HigherOrder(Sayhimanshu, 6)



// task 10: higher-order function that takes two functions and value, 
//applies the first function to the value, and then applies the second function to the result.

function higherOredr2(func1, func2, value) {

    const result1 = func1(value)  // applies value here directly 
    console.log(result1);

    const result2 = func2(result1)   // here, applies result as a value
    console.log(result2);
}

function multiply() {
    let x = 5
    return x * 4
}

function addOne() {
    let x = 5
    return x + 1
}

higherOredr2(addOne, multiply)








// +++++++ day 5 has completed 🥳🎈😊  +++++++