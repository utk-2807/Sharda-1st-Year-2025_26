// Javascript is a programming language which is synchronous and single-threaded (i.e., one line of code at a time)

// console.log("Hello world"); //print statement, in console

// let, var, const

// var a = 16;
// console.log(a);

// var b = 13 + 18;
// console.log(b);

// var a = 10;
// var b = 20;
// console.log(a + b);

// var a; //declaration
// a = 16; //assignment

// var a; //redeclaration is possible
// a = 30; //reassignment is possible
// console.log(a);

// let a; //declaration
// a = 15; //assignment
// // let a; //redeclaration is not possible
// a = 30; //reassignment is possible
// console.log(a);

// const c = 30; //declaration and assignment in the same line
// // const c; //redeclaration is not possible
// // c = 40; //reassignment also is not possible
// console.log(c);

//String
// let a = "Hello Class";
// console.log(a);

//Array
// let b = [20, "utkarsh", true, 30, "upadhyay"];
// console.log(b);

// Javascript has an execution as well as memory stack
// Global Execution Context

// console.log(b);
// let a;
// a = 20;
// console.log(a);
// var b = 30;
// a = 60;
// const c = 40;
// var b = 50;
// console.log(c);

// Variables, Strings, Boolean, Null and Undefined are stored in stack memory (They are Primitive Datatype). Arrays, Objects and Functions are stored in Heap Memory (They are Non-Primitive)

// let realName = "Utkarsh Kumar"
// let otherName = realName;
//     otherName = "Utkarsh Upadhyay"; //reassign
// console.log(realName);
// console.log(otherName);

// let arr = [20, "utkarsh", 30, 40, true];
// let newArr = arr;
//  newArr[1] = "upadhyay";
// console.log(arr);
// console.log(newArr);

//Loops through Array
// let arr = [20, 30, 40, 50];
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//Functions
// function a(){
//     console.log("This is the most basic version of function declaration")
// }
// a();
// const a = function(){
//     console.log("Better way of declaring a function")
// }
// a();
//Arrow Function
// const a = () =>{
//     console.log(a);
// }
// a();

//Higher Order Functions
// function a(arg){ //HOF
//     console.log("Inside A")
//     arg();
// }
// function b(){ //callback
//     console.log("Inside B")
// }
// a(b);

//Lexical Scope
function parent(){
    const x = 20;
    function child1(){
        const y = 50;
        console.log(x + y);
    }
    function child2(){
        const z = 30;
        console.log(y + z); // wont' work
    }
    child1();
    child2();
}
parent();
// Closure is that function which always remembers its lexical scope



