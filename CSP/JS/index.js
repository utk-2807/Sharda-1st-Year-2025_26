// Javascript is a synchronous and a single threaded language (it means one line of code at a time)
// console.log('Hello class'); //print statement

// Primitive Datatypes - String, Integer, Boolean, null, undefined
// Non-Primitive Datatypes - Arrays, Objects, Symbols and Functions

// let, var, const

// var a = 16;
// console.log(a);  //print 16

// Difference between let var and const

// var a; //declaration
// a = 30; //assignment
// var a; //redeclaration
// a = 40; //reassignment
// console.log(a); // redeclaration and reassignment is possible in var

// let a; //declaration
// a = 20; //assignment
// // let a; // redeclaration is not possible
// a = 50; //reassignment is possible
// console.log(a);

// const a = 20;
// // const a; // redeclaration is not possible
// // a = 70; //reassignment is also not possible
// console.log(a);

// let realName = "Utkarsh";
// let otherName = realName;
// otherName = "Uttu"; //reassigned a value to the variable
// console.log(realName);
// console.log(otherName);

//Primitive datatypes store their value into Stack Memory
// Non-Primitive Datatypes store their value into Heap Memory

// let arr = [20, "utkarsh", true, null, undefined];
// let newArr = arr;
// newArr[1] = "upadhyay";
// console.log(arr);
// console.log(newArr);

// Loop through Arrays
// let arr = [20, 30, 40, 50];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//Basic Syntax
// function user(){
//     let x = 1;
//     let y = 3;
//     console.log(x + y);
// }
// user();

// Better Way
// const user1 = function(){
//     let x = 1;
//     let y = 3;
//     console.log(x + y);
// }
// user1();

//Arrow Function. When EcmaScript6 was introduced.
// const user2 = () =>{
//      let x = 1;
//     let y = 3;
//     console.log(x + y);
// }
// user2();

//HOF (Higher - Order Functions)
// function a(x){  //Higher Order Function
//     console.log("Inside a");
//     x();
// }
// function b(){ //Callback Function
//     console.log("Inside b");
// }
// a(b);

// Lexical Scope
function a(){
    const x = 10;
    console.log(x + y);
    function b(){
        const y = 20;
        console.log(x + y);
    }
    b();
}
a();

// The function which always remembers its lexical scope is called a closure.


