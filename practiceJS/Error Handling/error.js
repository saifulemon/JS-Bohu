// Error Handling

console.log('Before Error!');

try {
    test();
    undefined.test();
}

catch(err) {
    console.log(err);
    console.log(err.message);
    console.log(err.name);
}

finally {
    console.log('I am inside finally!');
}

console.log('After Error!');



let a = 16;

try {
    if (a > 15) throw 'Too Big';
    else if (a < 24) throw 'Too small';
}

catch (err) {
    console.log(err);
}