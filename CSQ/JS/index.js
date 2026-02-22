// Javascript is a programming language which is synchronous and single threaded (it means that one line of code will be executed at a time)
// console.log("Hello world"); //print statement

// var, let, const
// var a = 16;
// console.log(a);

// var a = 20;
// var b = 30;
// console.log(a+b);

// Difference between var, let and const

// var a; //declaration
// a = 10; //assignment
// var a; //redeclaration can be done
// a = 39; //reassignment can be done
// console.log(a);

// let a; //declaration
// a = 20; //assignment
// // let a; //redeclaration is not possible
// a = 40; //reassignment is possible
// console.log(a);

// const c = 30; //declaration and assignment should be done in the same line
// // const c; //redeclaration not possible
// c = 50; //reassignment is not possible
// console.log(c);

// let realName = "Utkarsh Kumar";
// let otherName = realName;
//     // otherName = "Utkarsh Upadhyay";
//     console.log(otherName);
//     console.log(realName);

// let arr = [20, "utkarsh", true,];
// arr[0] = 40;
// console.log(arr);

// let arr = [20, "utkarsh", true,];
// let newArr = arr;
// newArr[1] = "upadhyay";
// console.log(arr);
// console.log(newArr);

// Primitive Datatypes - String, Integer, Boolean, null, undefined ( They are stored in stack memory )
// Non-Primitive Datatypes - Arrays, Objects, Functions, Symbols ( They are stored in heap memory )

//Different Syntax for Functions
// function a(){
//     console.log("This is the most basic form of declaring a function")
// }
// a(); //calling a function

// const functionName = function(){
//     console.log("This is a better way to declare functions")
// }
// functionName();

//Arrow function ( Introduction with ES6 (EcmaScript))
// const functionName = () => {
//     console.log("Most Efficient as well as Most Important")
// }
// functionName();

//Loop through Arrays
// let arr = [20, 30, 40, 50];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//Higher-Order Functions in JS
// function a(param){ // param ki value call karte time b rakhdi.
//     param(); // b ko call lagegi
//     console.log("Inside a"); 
// }
// function b(){
//     console.log("Inside b");
// }
// a(b); 
// Here, a is the higher-order function, and b is the callback function

//Lexical Scope
function parent(){
    const x = 20;
    function child(){
        const y = 30;
        console.log(x + y);
    }
    child();
}
parent();

//Closure is a function which always remembers its lexical environment