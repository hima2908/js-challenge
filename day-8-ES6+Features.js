// day 8 : ES6 + Features

// Activity 1 : Template literals
// task1 : use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name = "himanshu"
const age = 27
console.log(`Hello, my name is ${name} and I am  ${age} years old`);

// task 2 : create a multi-line string using template literals and log it to the console

const multiLineStrin = `hi , i am himanshu bokde 
this is a example of multi line string in template literals `
console.log(multiLineStrin);

// Activity 2: Destructuring 

// task 3 : use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const number = [1, 2, 3, 4, 5]
const [first, second] = number
console.log(first);
console.log(second);

// task 4 : use object destructuring to extract the title and author from a book objects and log them to the console.

const book = {
    title: "think and grow rich",
    author: "Napoleon Hill",
    year: 1937
}

const { title, author } = book

console.log(title);
console.log(author);

//Activity 3 : Spread and Rest Operators

// task 5 : use the spread operator to create a new array that includes all elements of an existing array plus additional emements, and log the new array to the console.

// spread operator ('...')

const arr1 = [1, 2, 3, 4]

const newarr = [...arr1, 5, 6, 7]
console.log(newarr);

// task 6 : use the rest operator in a function to accept an arbitrary number of arguments, sum them , and return the result.

function sum(...numbers) {
    return numbers.reduce((acc, val) => {
        return acc + val
    }, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Activity 4 : Default Parameters
// task 7 : write a function that takes two parameters and return their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.


function products(a, b = 1) {
    return a * b
}
console.log(products(3));

function product(a, b) {
    return a * b
}
console.log(product(3, 3));

// Activity 5 : Enhanced Object literals
// task 8 : use enhanced objects literals to create an object with methods and properties, and log the object to the console.

// enhanced object literal with methods and properties
let person = {
    firstName: "himanshu",
    lastName: "bokde",
    age: 27,

    getfullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person);

// task 9 : create an objects with computed property names based on variables and log the objects to the console.

// variables
const firstName = "himanshu";
const lastName = "bokde";
const myage = 27;

//creating an objects with cumputed property name
let Person = {
    ['first'+'Name'] : firstName,
    ['last'+'Name'] : lastName,
    ['myage'] : age,
    ['isAdult'] : age >= 18      // extra 
}
console.log(Person);

// day 8 completed 🥳🎈🚀