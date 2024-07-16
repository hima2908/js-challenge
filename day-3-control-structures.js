// Activity 1: if-else 

//task 1 : to check number negative , positive , zero
let a = -2;

if (a < 0) {
    console.log("number is negative");
} else if (a == 0) {
    console.log("numbre is zero");
} else {
    console.log("number is positive");
}

//task 2 : to check eligible to vote
let age = 17
if (age >= 18) {
    console.log("person is eligible to vote");
} else {
    console.log("person is not eligible to vote");
}


//Activity 2: Nested if-else Statements

//task 3 : find largest of three numbers 

let num1 = 79
let num2 = 50
let num3 = 30
if (num1 < num2) {
    if (num2 < num3) {
        console.log("the largest no is num3");
    } else {
        console.log("the largest no is num2");
    }
} else {
    console.log("the largest no is num1");
}

//Activity 3: Switch case

//task 4 : determine the day of the week based on number(1-7)

let day = 1
switch (day) {
    case 1: console.log("monday");
        break;
    case 2: console.log("tuesday");
        break;
    case 3: console.log("wednsday");
        break;
    case 4: console.log("thusday");
        break;
    case 5: console.log("friday");
        break;
    case 6: console.log("saturday");
        break;
    case 7: console.log("sunday");
        break;
    default: console.log("Enter valid number");
        break;
}

//task 5 : to assign a grade based on score

let score = 90
switch (true) {
    case  (score > 100 || score < 0) : console.log("not a valid score");     
        break;
    case (score >= 80): console.log("grade A");
        break;
    case (score >= 70): console.log("grade B");
        break;
    case (score >= 60): console.log("grade C");
        break;
    case (score >= 50): console.log("grade D");
        break;
    case (score >= 35): console.log("grade F");
        break;
    default: console.log("you are failed");
}

// Activity 4 : Conditional(Ternery) Operator

// task 6 : check number even or odd

let num = 20;
(num%2 == 0 ) ? console.log("even"): console.log("odd")

// Activity 5 : Combining Conditions

// task 7 : check leap year or not 

let year = 2024

if( (year % 4 == 0 && year % 100 !==0) || year % 400 == 0 ){
   console.log(`${year} is leap year`);
    
}else{
    console.log(`${year} is not leap year`);
}    


//++++++ day 3 has completed 🥳🎈🥳  +++++++