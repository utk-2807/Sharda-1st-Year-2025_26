// Javascript is a programming language, which is synchronous and single threaded. (i.e., it executes one line of code at a time)
// Not like other programming languages. Semi-colon is not mandatory. Using javascript is easy, but its execution is so complex.
// console.log("Hello world") //print statement

// there are 2 types of datatypes:-
// 1. Primitive Datatype - String, Integer, Boolean, Null, Undefined. They are stored in Stack Memory
// 2. Non-Primitive Datatype - Arrays, Objects, Symbols and Functions. They are stored in Heap Memory.

// let, var and const

// var a = 16; // declaration and assignment
// console.log(a); //printing the value of a

//Differences between let, var and const
// var a; //declaration 
// a = 20; //assignment
// var a; //redeclaration
// a = 30; //reassignment
// console.log(a);

// let a; //declaring the variable
// a = 30; //assigning value
// // let a; //redeclaring is not possible
// a = 50; //reassigning is possible
// console.log(a);

// const c = 30;
// // const c; //redeclaration is not possible
// c = 50; //reassignment is also not possible
// console.log(c);

// let fName = "Utkarsh";
// let lName = "Upadhyay";
// let fullName = fName + " " + lName;
// console.log(fullName);

// let realName = "Utkarsh Kumar";
// let otherName = realName;
//     otherName = "Utkarsh Upadhyay";
// console.log(realName);
// console.log(otherName);

// let arr = [20, 30, "utkarsh", true];
// let newArr = arr;
//     newArr[2] = "upadhyay";
// console.log(arr);
// console.log(newArr);

// Different Syntaxes for Functions

//1. 
// function function_name(){
//     console.log("The most basic way of declaring a    function")
// }
// function_name(); //Calling the function

// 2.
// const function_name = function(){
//     console.log("This is the better way")
// }
// function_name();

// 3. Arrow Function (Introduced with ES6)
// const function_name = () =>{
//     console.log("The most important functional syntax in javascript")
// }
// function_name();