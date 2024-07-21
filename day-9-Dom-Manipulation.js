// day 9 : Dom Manipulation

// Activity 1: selecting and manipulate elements
// task 1: select an HTML elements by its ID and change its text content.

const h1 = document.getElementById("h1")
h1.innerHTML = "bokde"

// task 2 : select an element by its class and change its background color.


const task2 = document.querySelector(".task2")
task2.style.backgroundColor = "#128440"


// Activity 2: creating and Appending Elements
// task 3 : create a new div elements with some text content and append it to the body.]

const div = document.createElement('div')
div.innerHTML = "this is new div created by js"
div.style.backgroundColor = "blue"
div.style.width = "200px"
div.style.height = "100px"
div.style.textAlign = "center"
div.style.alignContent = "center"

document.body.appendChild(div)

// task 4 : create a new li elementn and add it to an existing ul list.

function addList(stdName) {

    const li = document.createElement('li')
    li.innerText = `${stdName}`
    document.querySelector(".stdName").appendChild(li)
}
addList("himanshu")
addList("kunal")
addList("ajay")
addList("nisha")

// Activity 3 : Removing Elements 
// task 5: select an element and remove it from the dom.

const h2 = document.querySelector(".h2")
h2.remove()

// task 6: remove the last child of a specific HTML elements 

// const lastelem = document.querySelector("li:nth-child(4)") // in here , you can dicide what you want to delete
// or
const lastelem = document.querySelector("li:last-child")
lastelem.remove()

// Activity 4 : Modifying Attributes and Classes

// task 7 : select an HTML element and change one of its attributes(e.g., src of an img tag)


const firstChanged = document.querySelector("li:first-child")
firstChanged.outerHTML = `<li> Aditi </li>`


// task 8 : add and remove a css class to / from an HTML element.

// add a single class 
let h3 = document.querySelector("h3")  // select element first
h3.classList.add('class1');            //then, add class to element

//add a multiple classes (Es6 spread syntax)
h3.classList.add("class2", "class3", "class4"); // or you can add multiple class to element

h3.style.width = "250px"
h3.style.height = "100px"
h3.style.backgroundColor = "red"

// remove a single class 
h3.classList.remove("class4")      //you can remove class from element

// remove a multiple classes
h3.classList.remove("class2","class3")  //you can remove multiple class from element

// Activity 5 : Event handling 
// task 9 : add a click event listener to a button that changes the text content of a paragraph.

const change = document.querySelector(".btn")
const para = document.querySelector("p")

change.addEventListener("click", () => {
    para.innerHTML = "paragraph changed"
})





// task 10 :add a mouseover event listener to an element that changes its border color 

const borderChanged = document.querySelector(".task10")

borderChanged.addEventListener("mouseover", () => {
    borderChanged.style.border = "solid yellow 10px"
})
borderChanged.addEventListener("mouseout", () => {
    borderChanged.style.border = ""
})