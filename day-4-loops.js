// Activity 1 : For loop

// task 1: print numbers from 1 to 10

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// task 2: print multiplication table of 5
let num;
for (let i = 1; i <= 10; i++) {
    num = 5 * i
    console.log(`5*${i} = ${num}`);
}

// Activity 2 : While loop

// task 3: calculate the sum of number from 1 to 10 

let num1 = 1;
let sum = 0;
while (num1 <= 10) {

    sum += num1
    num1++
    console.log(sum);
}
console.log(`sum of number is ${sum}`);

// task 4: print no from 10 to 1 

let num2 = 10
while (num2 >= 1) {
    console.log(num2);
    num2--
}

//Activity 3: DO...while loop

// task 5: to print number from 1 to 5

let num3 = 1
do {
    console.log(num3);
    num3++
} while (num3 <= 5);

// task 6: calculate factorial no 


let factorial = 5
let number = 5
let i = 1
do {

    factorial = factorial * i
    i++
    console.log(factorial);
} while (i <= number);

console.log(factorial);


// Activity 4: Nested loops

// task 7 : print pattern



for (let i = 1; i <= 5; i++) {
    let output = ''
    for (let j = 1; j <= i; j++) {
        output += '* '
        
    }
    console.log(output);
}
// console is automatically take new line      


// Activity 5: loop control statements

// task 8: print number from 1 to 10 , but skip 5 using continue

for(let i = 1 ; i <= 10 ; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

// task 9: print number from 1 to 10, but stop loop when the number is 7 using break

for(let i = 1 ; i <= 10 ; i++){
    if(i==7){
        break
    }
    console.log(i);
}


// ++++++  day 4 has completed 🥳🎈🥳  ++++++