//  day 7 : Objects

// Activity 1: Object Creation and Access
// task 1: create an object representing a book with properties like title, author, and year, and log the object to the console.

console.log("--- this is starting book ---");

const book = {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: 1937
}
console.log(book);

// task 2: Access and log the title and author properties of the book of object

console.log(`book title is :`, book.title);
console.log(`book author is :`, book.author);

// Activity 2: Object Method 

// task 3: add a method to the book object that return a string with the book's title and author, and log the result of calling this method

console.log("--- this is books 1 ---");

let book1 = {
    info: () => {
        return `Title: think and grow rich and author: Nepoleon Hill `
    }
};
console.log(book1.info());


// task 4: add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.

console.log("---this is book 2 ---");

let book2 = {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    getinfo: (year) => {
        return year

    }
};

console.log(book2.getinfo("1930"));

// Activity 3 : Nested Objects
// task 5 : create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
    name: "bhagwati wachnalay",
    books: [
        {
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            year: 1937
        },
        {
            title: "Atomic Habit",
            author: "jemes clear",
            year: 1998
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert T. Kiyosaki",
            year: 2002
        },
    ]
}
console.log(library);



// task 6: access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);

// Activity 4: this Keyword
// task 7: add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

console.log("--- this is book 3 ---");

let book3 = {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    year: 1937,
    getinfo: () => {
       
       return `book title: ${this.title,"Think and Grow Rich"} & year: ${this.year,"1937"}`
    }
};
console.log(book3.getinfo()) ;

// Activity 5: Object iteration
// task 8: use a for...in loop to iterate over the properties of the book object and log each property and its value

for (const key in book3) {
   console.log(key);   
}
console.log(book3.title);
console.log(book3.author);
console.log(book3.year);
console.log(book3.getinfo());

// task 9 : use Object.keys and Object.values method to log all the keys and values of the book object.

console.log(Object.keys(book3));
console.log(Object.values(book3));


// day 7 completed 🚀