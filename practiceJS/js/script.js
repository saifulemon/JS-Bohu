 var a = 30; 
 var b = 25;
 console.log(a,b);


 let x = '28';
 let y = '47';


 let m = x + y;
 let n = x - y;
 console.log(m);
 console.log(n);



 var a = (1 < -5) ? 'Hello':'World';
 console.log(a);


 var countries = ['Bangladesh', 'USA', 'Pakistan'];
 console.log(countries[1]);
 countries.push('India');
 console.log(countries);


 let x = 'Bangladesh';
 let y = x.split('');
 console.log(y);


 let a = ['Saiful', 'Hasnat', 'Ikbal', 'Mehedi'];
 let b = a.split(',');
 console.log(b);




 var student = {
     nam: 'Rahim',
     age: 25,
     homeTown: 'Feni', 
     phone: 01302050
 }

 console.log(student);



 let a = 5;
 let b = a;

 a = 7;
 console.log(a);



 Backtick = ``
 console.log(`Hello World
 I love Programming .........
 `);



 let age = prompt();

 if (age >= 50) {
     console.log('old!');
 }
 else if (age >= 30 && age < 50) {
     console.log('Under 50 but above or equal 30!');
 }
 else {
     console.log('Under 50!');
 }




//find the largest number
let n1 = prompt('First Number: ');
let n2 = prompt('Second Number: ');
let n3 = prompt('Third Number: ');

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1 >= n2 && n1 >= n3) {
    console.log(`${n1} is the largest number!`);
}
else if (n2 >= n1 && n2 >= n3) {
    console.log(`${n2} is the largest number!`);
}
else {
    console.log(`${n3} is the largest number!`);
}








Switch
let choice = prompt();

let text;

switch (choice) {
    case 'a':
        text = 'you have selected option 1';
        break;
    case 'b':
        text =  'you have selected option 2';   
        break;
    case 'c':
        text =  'you have selected option 3';   
        break;
    default:
        text = 'No option is selected'
        break;
}

console.log(text);





