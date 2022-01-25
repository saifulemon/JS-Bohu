// while loop example
let i = 1;
while (i <= 5) {
    // console.log('Hello World');
    // i++;
}
console.log('Out of the loop');



// do while loop example
do {
    console.log('value of i: ' + i);
    i++;
} while (i <= 5);
console.log('Out of the loop');




// print 1 to 10
let i = 1;

while (i <= 10) {
    if (i === 4) {
        console.log(`value of i is ${i}`);
    }
    console.log(i);
    i++;                                                       
}





//sum of 1 to 10
let i = 1;
let sum = 0;
let product = 1;

while (i <= 10) {
    sum = sum + i;
    product = product + i;
    i++;
}
console.log(`Result is: ${sum}`);
console.log(`Product is: ${product}`);





// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);  
}




for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}





// string
let nam = 'Saiful Islam';
let len = nam.length;
for (let i = 0; i < len; i++) {
    console.log(`index = ${i}`);
    console.log(nam[i]);
}





// array
let food = ['Cake', 'Chocolate', 'Ice Cream'];
let len = food.length;
for (let i = 0; i < len; i++) {
    console.log(`index = ${i}`);
    console.log(food[i]);
}





// For-in -> string/array/object
// For-of -> string/array
let names = 'I am learning JavaScript';
let food = ['Cake', 'Chocolate', 'Ice Cream', 'Banana', 'Butter'];
let person = {
    nam: 'Saiful Emon',
    proffession: 'Web Developer',
    age: 20,
    location: 'Feni'
}

for (let x in names) {     // using for in loop and get index
    console.log(`index ${x} and value ${names[x]}`);
}

for (let x of food) {    // using for of loop and get values/items
    console.log(x);
}


// object doesn't have index
for (let y in person) {
    console.log(y);
}




// task
let n = parseInt(prompt('Enter the number of terms: '));
let sum = 0;
let series = '';

for (let i = 1; i <= n; i++) {
    sum += i ** 2;
    series += sum.toString();
    if ( i == n) {
        continue;
    }
    series += ' + ';
}
console.log(`${series} = ${sum}`);