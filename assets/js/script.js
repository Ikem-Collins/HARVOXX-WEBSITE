AOS.init();
// data - aos - duration = "5000"

// alert("Page Not Found")
// console.log("Welcome to my Homepage")


// var num1 = 10
// var num2 = 12.4

// var name = "John@123"
// console.log(name)

// var loading = true

// var number = num1
// console.log(number)

// mathematical Operations and Operators 
// +, -, * , /, **, %

// var num1 = 6
// var num2 = 3
// var sum = num1 + num2
// console.log(sum)

// var fig1 = 2
// var fig2 = 5
// var fig3 = 1
// var fig4 = 7
// var fig5 = 3
// var fig6 = 8
// var fig7 = 10
// var fig8 = 20
// var fig9 = 4
// var fig10 = 19

// var solution = (fig1 + fig2 + fig3 + fig4 + fig5 + fig6 + fig7 + fig8 + fig9) * fig10
// console.log(solution)


// Conditional Statements - If Else Statements 
// >, <, <=, >=, !=, ==, ===


// if (true) {
//     console.log("Yes")
// }

// if (5 > 3) {
//     console.log("Your conditional statement is TRUE")
// }


// var person = "John"

// if (person != "John") {
//     console.log("Your conditional statemt is TRUE")
// } else {
//     console.log("Sorry! Your conditional statment is wrong")
// }

// if (5 > 6) {
//     console.log("5 is the greatest")
// } else {
//     console.log("5 is not the greatest")
// }

// var num1 = 2
// var num2 = 7

// if (num1 > num2) {

//     console.log("num1 is greater than num2")
// } else {
//     console.log("num2 is greater than num1")
// }

// Concatenation allows you join two or more datatypes together.

// var num1 = 20
// var num2 = 17

// if (num1 > num2) {

//     console.log(num1 + " is greater than " + num2)
// } else {
//     console.log(num2 + " is greater than " + num1)
// }

// MULTIPLE IF ELSE STATEMENT

// var message = "welcome"


// if (message == "Hi") {
//     console.log("Hi, how are you doing")
// } else if (message == "I am fine") {
//     console.log("Great, you are in good shape")
// } else if (message == "I need help") {
//     console.log("Kindly check the help section of this page")
// } else {
//     console.log(" Snap!! server down ")
// }


// var level = "Jss3"
// var age = 19
// var grade = 70

// if (level == "Jss3") {
//     if (age <= 18) {

//         if (grade >= 70) {
//             console.log("You are allowed")
//         } else {
//             console.log("Your grade is too low")
//         }
//     } else {
//         console.log("Your age is not allowed")
//     }
// } else {
//     console.log("Your class is not allowed")
// }

// LOGICAL STATEMENTS
// Logical statements are IF ELSE STATEMENTS done using logical operators  
// Logical operators are used to compare multiple two or more conditional expressions (logical operations) 
// which will resolve  to true or false

// Operators 
// AND = &&
// OR = ||

// For security reasons, logical operation is more strict with information or navigation, while nested IF narrows down to which is wrong
// var age = 19
// var level = "Jss3"
// var grade = 90

// if (level == "Jss1" && age <= 18 && grade >= 70) {
//     console.log("You are allowed")
// } else {
//     console.log("Your Level, Age or Grade is not allowed")
// }



// ASSIGNMET also check using LOGICAL STATEMENT
// var username = "collins"
// var password = "HarvoxxDSP300$$"

// if (username == "collins") {
//     if (password == "HarvoxxDSP30$$") {
//         console.log("You are logged in")
//     } else {
//         console.log("Password incorrect")
//     }

// } else {
//     console.log("username incorrect")
// }

// LOGICAL STATEMENT SECTION
// if (username == "collins" && password == "HarvoxxDSP30$$") {

//     console.log("You are logged in")
// } else {
//     console.log("Username and Password incorrect")
// }



// ARRAYS::: 
// A variable to stores multiple values 

// var num1 = 4
// var num = [4, 7, 2, 9, 3, "John", num1, true]

// ARRAY OPERATIONS = C.R.U.D OPERATION
// Retrieving data or value from the array - this is a method of fetching data from the array
// console.log(num[0] + num[1])

// UPDATING DATA
// There are methods of updating array index - PN
// var x = 78
// console.log(x)
// x=60
// console.log(x)
// console.log(num)
// num[5] = "Mary"
// console.log(num)

// INSERTING A DATA 
// num[8] = "James"
// console.log(num)
// DELETION

// === MULTI-DIMENSIONAL ARRAYS 
// These are arrays are that has other arrays in them, they can be called a Nexted Array.

// var num = [4, 7, 2, 9, 3, "John", num1, true, [
//         ["rice", "stew"], 60, 70
//     ]]
// num[8][1]
// console.log(num[8][0][0])

// OBJECTS - They are similar to arrays, but they are more descriptive of the kind of values they are storing.
// It stores values relating to an object at a given time

// var person = { name: "John", age: 27, is_eating: true }
// OBJECT OPERATIONS 
// person.name
// console.log(person.name)
// console.log(person.age)
// console.log(person.is_eating)

// UPDATING - select the data and assign something else to it 
// person.name = "Maxwell"
// console.log(person.name)


// INSERTND DATA - select a property that is not there and make it = something 
// person.hobby = "coding"
// console.log(person)

// MULTIDIMENSIONAL OBJECT OR NEXTED OBJECT
// var person = {
//     name: "John",
//     age: 27,
//     is_eating: true,
//     result: {
//         maths: 100,
//         english: 90,
//         physics: {
//             pract: 25,
//             theory: 65,
//             students: ["John", "Mary", "James", { total_student: 3 }]
//         }
//     }
// }
// console.log(person.result.physics.students[3].total_student)


// LOOPS - programs that can run repeatedly until it is broken
// TYPES OF LOOP
// -FOR LOOP
// -WHILE LOOP
// -DO-WHILE LOOP

// syntax 
// while(){

//  }

// var x = 0
// while (x < 100) {
//     if (x % 2 == 0)
//         console.log(x)
//     x = x + 1
// }


// var i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// FOR LOOP - You include your initialization, donditional expression and the incremental value before the execution block
// var names = ["John", "James", "Mary", "Peter"]
// for (var i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// var names = ["John", "James", "Mary", "Peter", "Max", "Nathan"]
// for (var i = 0; i < 6; i++) {
//     console.log(names[i])
// }
// FUNCTIONS - they are used to store operations that will be executed at a later time

// function speak() {
//     console.log("I am speaking...")
// }

// This function uses a parameter and argument 
// console.log("tyring out bunch of codes")

// speak()
// speak()
// speak()
// speak()

// function sum() {
//     var num1 = 6
//     var num2 = 9
//     var sum = num1 + num2
//     console.log(sum)
// }
// sum()

// function sum(x, y) {
//     // var num1 = 6
//     // var num2 = 9
//     var sum = x + y
//     console.log(sum)
// }
// sum(12, 10)
// sum(5, 2)

// function area(x, y) {
//     var area = (x * y) / 2
//     console.log(area)
// }
// area(12, 6)
// area(15, 3)

// --NOTE-- FUNCTION IS USED TO ENCAPSULATE BULKY OPERATIONS 


// METHOD - these are functions that lives inside of an object || functions that do not have a name are anonymous function, however, they can inherit a name
// Function is another type of data 
// var person = {
//     name: "John",
//     age: 27,
//     speak: function(x) {
//         console.log(x)
//     }
// }
// person.speak("I am speaking.......")
// console.log(document.getElementById("logo"))



// RETURN STATEMENT IN A FUNCTION - 12/03/2024
// whenever you return a value, the function call becomes that value
// after the return statement, no other code gets executed.
// function sum(x, y) {
//     console.log(x + y)
//     var s = x + y
//     return s
//     console.log("do something")
// }
// var addition = sum(6, 3)
// console.log(addition + 4)

//GETTING ELEMENT
// how we can get element
// GRABBING ELEMENET - YOU CAN MANIPULATE THE STYLE OF THE GRABBED ELEMENT
//

// console.log(document.getElementById("logo"))
// Note that all the elements on your webpage is an element....
// Get elemt by ID - allows you to pick an element using the ID
// Get element by class name flashes an array of elements where you select by array index
// logo.innerHTML = "username is incorrect.. <button>click here</button>"
//console.log(logo)

// <<<<<<  GRAB SECTION >>>>>>
// var logo = document.getElementById("logo")
// var modal = document.getElementById("modal")
// var cancel = document.getElementById("cancel")





// logo.addEventListener("click", function() {
//     // alert("You Clicked Me")
//     logo.style.color = "green"
//     modal.style.display = "block"
//     modal.style.transition = "ease 3s"
//         // modal = document.getElementById("modal").style.transition = "all 1s";


// })
// cancel.addEventListener("click", function() {
//     logo.style.color = ""
//     modal.style.display = "none"
//     modal.style.transition = "ease 2s";
//     // modal = document.getElementById("modal").style.transition = "all 0.5s"

// })

// // event listener - it takes up two major arguments, the type of events you want to listen to
// // ananonymous functions are functions without a name *** note that ***




// // var para = document.getElementsByClassName("para")
// // console.log(para)
// // para[0].style.color = "grey"
// // para[1].style.color = "grey"
// // para[2].style.color = "grey"

// // for (var i = 0; i < 9; i++) {
// //     if (i % 2 == 0)
// //         para[i].style.color = "yellow"
// //     else {
// //         para[i].style.color = "orange"
// //     }
// // }


// // <<<<<<<<<<<<<<<<<<<<<<<<<<<<< FORM VALIDATION >>>>>>>>>>>>>>>>>>>>
// // console.log(document.getElementsByTagName("div"))

// // form validation

// function say() {
//     alert("I am saying something...!")
// }

// function validate() {
//     var name = document.getElementById("name")
//     var email = document.getElementById("email")
//     var subject = document.getElementById("subject")
//     var message = document.getElementById("message")
//     var error = document.getElementById("error")

//     if (name.value == "") {
//         // alert("Name cannot be empty!")
//         error.innerHTML = "Name cannot be empty!"
//         return false

//     } else if (email.value == "") {
//         // alert("Email cannot be empty")
//         error.innerHTML = "email cannot be empty!"
//         return false

//     } else if (email.value.includes("@") == false) {
//         // alert("invalid email")
//         error.innerHTML = "invalid email syntax!"
//         return false

//     } else if (subject.value == "") {
//         // alert("Subject cannot be empty")
//         error.innerHTML = "Subject cannot be empty"
//         return false

//     } else if (message.value == "") {
//         // alert("Message cannot be empty")
//         error.innerHTML = "Message cannot be empty"
//         return false

//     } else {
//         return true
//     }
// }


// TIMING FUNCTIONS 
// There are mainly two timing functions in JS
// - Set Interval, this function take two arguments, the first argumennt is the function you want to run and the second 
// argument is the time you want it to run

// setInterval(function() {
//     console.log("Running...")
// }, 1000)

// var num = 10

// setInterval(function() {
//     num = num - 1
//     console.log(num)
// }, 1000)

// var timer = document.getElementById("timer")
// var num = 10

// var interval = setInterval(function() {
//     num = num - 1
//         // console.log(num)
//     timer.innerHTML = num
//     if (num == 0) {
//         clearInterval(interval)
//         timer.innerHTML = ""

//     }
// }, 1000)


// var hour = document.getElementById("hour")
// var min = document.getElementById("min")
// var sec = document.getElementById("sec")
// var hour = 1
// var min_value = 2
// var sec_value = 60

// min.innerHTML = min_value;

// var timer = setInterval(function() {
//     sec_value = sec_value - 1
//     sec.innerHTML = sec_value

//     // if (_value == 0 && sec_value == 0) {
//     //     min.innerHTML = 0
//     //     sec.innerHTML = 0
//     //     clearInterval(timer)
//     //     return 0
//     // }

//     if (min_value == 0 && sec_value == 0) {
//         min.innerHTML = 0
//         sec.innerHTML = 0
//         clearInterval(timer)
//         return 0
//     }

//     if (sec_value == 0) {
//         min_value = min_value - 1
//         min.innerHTML = min_value
//         sec_value = 60
//     }
// }, 1000)

// var field = document.getElementById("field")
// var add = document.getElementById("add")
// var display = document.getElementById("display")

// add.addEventListener("click", function() {
//     // display.innerHTML = field.value
//     var h1 = document.createElement("h1")
//     h1.innerHTML = field.value
//         // display.append(field.value)
//     display.append(h1)
//     field.value = ""
// })

// field.addEventListener("keyup", function() {
//     display.innerHTML = field.value
// })

// setTimeout
// It runs a certain function once after a certain period of time, it allows you run a function once when that time
//  counts complete, for instance show an image after every 5 seconds 

// setTimeout(function() {
//     console.log("Run")
// }, 2000)

var modal = document.getElementById("modal")
var cancel = document.getElementById("cancel")
setTimeout(function() {
    modal.style.display = "block"


}, 5000)
cancel.addEventListener("click", function() {
    modal.style.display = "none"
})