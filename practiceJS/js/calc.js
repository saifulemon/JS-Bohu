console.log(`Select an Option:
1. Add
2. Subtract
3. Multiply
4. Divide
`);

let num1 = prompt('Enter First Number: ');
let num2 = prompt('Enter Second Number: ');
let option = prompt('Chooe an operation: ');

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

let result = null;


let num1Con = isNaN(num1);
let num2Con = isNaN(num2);
let optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log('Invalid Input!');
} else {
    switch (option) {
        case 1:
            result = num1 + num2; 
            break;
        case 2:
            result = num1 - num2; 
            break;
        case 3:
            result = num1 * num2; 
            break;
        case 4:
            result = num1 / num2; 
            break;    
        default:
            break;
    }
    
    if (result == null) {
        console.log('No Result');
    } else {
        console.log(`Result: ${result}`);
    }
}

