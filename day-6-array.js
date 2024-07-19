// Day 6 : Arrays

// Activity 1 : Array creation and Access
// task 1: create array of no from 1 to 5 and log

const arr = [1, 2, 3, 4, 5]
console.log(arr);

// task 2: access the first and last elements of array

const arr1 = [1, 2, 3, 4, 5]
console.log(arr1[0]);
// console.log(arr1[4]);
console.log("last elements",arr1.length); // which is last elements of array we know by the lenght

// Activity 2: Array method (basic)
// task 3: use push() to add a new number to the end of the array and log updated array.

const arr2 = [1, 2, 3, 4, 5]
arr2.push(6)
console.log(arr2);

// task 4: use pop() to remove the last elem from the array and log the updated array

const arr3 = [1, 2, 3, 4, 5, 6]
arr3.pop()
console.log(arr3);

// task 5: use shift() to remove the first elements from the array
const arr4 = [1, 2, 3, 4, 5, 6]
arr4.shift()
console.log(arr4);

// task 6: unshift() to add new number to the beginning of the array

const arr5 = [1, 2, 3, 4, 5]
arr5.unshift(10)
console.log(arr5);

// Activity 3: Array methods (intermediate)

// task 7: use map() to create a new array where each number is doubled and log the new array

const myarr = [1, 2, 3, 4, 5]

let newarr = myarr.map((ele) => {
    return ele * 2
})
console.log(newarr);

// task 8: use filter() to create a new array with only even numbers and log the new array

const myarr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

let mynewarr = myarr1.filter((value) => {
    return value % 2 == 0    // only even number filtered-out 
})
console.log(mynewarr);

// task 9: use reduce() to calculate the sum of all numbers in array 


const myarr2 = [10, 20, 30, 10]

let initialValue = 40
let myTotal = myarr2.reduce((acc, crntvalue) => {

    return acc + crntvalue
}, initialValue)

console.log(`your total is Rs. ${myTotal}`);


// Activity 4: Array iteration

// task 10: use for loop iterate over the array and log the each element to the console

const myarr3 = [1, 2, 3, 4, 5]

for (let i = 0; i <= myarr3.length - 1; i++) {

    console.log(myarr3[i]);
}

// task 11: use forEach() to iterate over the array and log each element to the console.

const myarr4 = [1, 2, 3, 4, 5]

myarr4.forEach((elem) => {
    console.log(elem);
})


// Activity 4: multi-dimensional arrays

// task 12: create two dimensional array (matrix) and log the entire array to the console.

let twoDiarr = [
    [10, 20, 30, 40, 50],
    [11, 12, 13, 14, 15]
]
console.log(twoDiarr);

// task 13: access and log a specific elements from the two-dimensional array

console.log(twoDiarr[0]); // access the 0th index of array of matrix 
console.log(twoDiarr[1]);  // access the 1st index of array of matrix 
console.log(twoDiarr[1][3]); // access the 1st index of array of matrix  4rd element




// day 6 has completed 🥳🎈🥳 