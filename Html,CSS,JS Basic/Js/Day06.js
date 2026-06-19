// console.log("Hello Day 06 from JS")

// Data Types
let a = 12345;
let b = 1234.5556;
let c = '@';
let d = "JavaScript";
let e = false;
let f = null;
let g;
let h = undefined;

console.log("a =", typeof a);
console.log("b =", typeof b);
console.log("c =", typeof c);
console.log("d =", typeof d);
console.log("e =", typeof e);
console.log("f =", typeof f);
console.log("g =", typeof g);
console.log("h =", typeof h);

// Functions

function greet() {
    console.log("Good Morning All...!");
}
greet();

function wish(name) {
    console.log("Happy Sunday...", name);
}
wish("Tejas");

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 4));

function multiply(a, b) {
    return a * b;
}

console.log("multiply = " , multiply(2, 4));

//variavl

const data = function (dt){
    console.log(dt);
 }
data(33);

//  let data = function (dt){
//     console.log(dt);
//  }
// data(3);

//Arrow Fuction :

const division = (a, b) => {
    console.log("Division = ", a/b);
};
division(10, 2);

// Function Calls
// console.log(calculator(10, 2, "+")); // 12
// console.log(calculator(10, 2, "-")); // 8
// console.log(calculator(10, 2, "*")); // 20
// console.log(calculator(10, 2, "/")); // 5

function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;

        default:
            return "Invalid Operator";
    }
}

// Function Calls
console.log(calculator(10, 2, "+")); // 12
console.log(calculator(10, 2, "-")); // 8
console.log(calculator(10, 2, "*")); // 20
console.log(calculator(10, 2, "/")); // 5
// const click =()=>{
//     console.log("Clicked");
// }
// click();
