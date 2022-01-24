
let numbers = prompt('What is your number?');
numbers = parseInt(numbers);

if (numbers <= 100 && numbers >= 80) {
    console.log('Your Grade is A+');
} 
else if (numbers >= 79) {
    console.log('Your Grade is A');
}
else if (numbers >= 69) {
    console.log('Your Grade is B');
}
else if (numbers >= 59) {
    console.log('Your Grade is C');
}
else if (numbers >= 49) {
    console.log('Your Grade is D');
}
else if (numbers >= 39) {
    console.log('Your Grade is E');
}
else if (numbers >= 32) {
    console.log('You have failed!');
}
else if (numbers < 0) {
    console.log('Your Grade: Invalid Input!');
}
else {
    console.log('Your Grade: Invalid Input!');
}
