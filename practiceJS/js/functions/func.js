function sayHello(nam, nam2) {
    console.log(`Hello ${nam} ${nam2}`);
}

let name1 = 'Saiful'; 

let name2 = 'Emon';

sayHello(name1, name2)




// normal function
function addNum(a, b) {
    return a + b;
}
let sum = addNum(5, 8);
console.log(sum);


// function expression
let sayHello = function () {
    console.log('Hello World');
}
sayHello();

// arrow function (ES6)
let saySomething = () => {
    console.log('I am an arrow function');
}
saySomething();




// Array iteration using forEach
let foods = ['Cake', 'Ice Cream', 'Biscuite', 'Chocolate', 'Bread'];
let numbers = [1, 2, 3, 4, 5];

// Default parameter of forEach function
// 1st parameter : Item
// 2nd parameter : Index
// 3rd parameter : whole array
foods.forEach(function (item, i, arr) {
    console.log(item, i, arr);
});



// Array itetation using mapping
function addSomething(item) {
    return `${item} is a food`;
}

let arr_res = foods.map(addSomething);
console.log(arr_res);

let arr_square = numbers.map(function (i) {
    return i * i;
});

console.log(arr_square);





// object method
let person = {
    firstName: 'Saiful',
    lastName: 'Islam',
    dob: '26-09-2002',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person.fullName());






// Math Object
let val;

val = Math.PI;
val = Math.E;
val = Math.round(500.3369);
val = Math.ceil(3.987);
val = Math.floor(56.336);
val = Math.sqrt(81);
val = Math.abs(-144);
val = Math.pow(10, 4);
val = Math.min(1, 5, -8, 3, 0);
val = Math.max(1, 5, -8, 3, 58);
val = Math.floor(Math.random() * 10 + 1);

console.log(val);





// Date Object
let value;
let today = new Date();

value = today.toString();
value = today.getMonth();
value = today.getTime();
value = today.getDay();
value = today.getFullYear();
value = today.getHours(); 
value = today.setMonth(3);

console.log(value);





// var & let & const
var a = 10;
a = a + 8;

console.log(a);

var a = 'Saiful Islam';
console.log(a);

let b = 55;
b = b - 5;
console.log(b);

let b = 'Bangladesh';
console.log(b);  // Uncaught SyntaxError: Identifier 'b' has already been declared






// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log(`Global Scope`, a, b, c);


// Function Scope or Block Scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;

    console.log(`Function Scope`, a, b, c);
}
test();

console.log(`Global Scope`, a, b, c);


// if scope
if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    
    console.log(`if scope`, a, b, c);
}
console.log(`Global Scope`, a, b, c);


// for loop scope
for (var a = 1; a < 10; a++) {
    console.log(a);
}
console.log(`Global Scope`, a, b, c);