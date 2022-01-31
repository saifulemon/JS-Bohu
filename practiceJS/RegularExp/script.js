// Regular Expression
// Pattern Matching Technique

let regular;

regular = /Hello/;
regular = /hello/i;    //i = case insesnsitive 

console.log(regular);
console.log(regular.source);

let str = 'Hello World';
str = 'Again Hello World';
str = 'hell world';
str = 'sdfdaHelloas world';
str = 'further Hello world Hello';
str = 'world'
str = 'further Hello world Hello';
str = 'world'
str = 'Again Hello World Hello';

// exec() = Returns result in an array or null
let result = regular.exec(str);
console.log(result);

// test() = Returns true or false
result = regular.test(str);
console.log(result);

// match() = Return array or null
result = str.match(regular);
console.log(result);

// search() = Returns index of the first match or -1
result = str.search(regular);
console.log(result);

// replace() = Returns new string 
let newStr = str.replace(regular, 'Hey');
console.log(result);
console.log(newStr);




let expression;
let char;
expression = /javascript/;
expression = /javascript/i;
expression = /script/i;
expression = /java/i;
expression = /ipt/i;
expression = /javascript/i;

// Meta Characters
expression = /^ReactJS/i;    // must start with
expression = /^Seriously/i;    

expression = /hello$/i;    // must end with
expression = /cript/i;

expression = /^love$/i;    // must start & and with
expression = /ja.vascript/i;
expression = /j*avasript/i;  // 0 or more times
expression = /Ser?iously/i;  // Optional

char = 'Seriously I love JavaScript'
console.log(expression.exec(char));


// character set using brackets []
let re;  
re = /h[el]lo/;   // must be one of them inside brackets
re = /[^hea]llo/;  // anything except those inside brackets
re = /^[ha]ello/;  // must start with h or a
re = /[a-z]hello/; 
re = /[A-Za-z]hello/;
re = /[0-9]hello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/; // no digit
re = /[0-9][0-9]ello/;  // two digit
re = /^[0-9][0-9][0-9][0-9][0-9]/;  // 5 digit


// Braces {} = Quantifier
re = /hel{2}o/;  // must occur exactly 2 times
re = /hel{3,5}o/;  // range
re = /hel{2,}lo/; // at least 2 times


// Parentheses () = Grouping
re = /^([0-9]{5})/;  // /^[0-9][0-9][0-9][0-9][0-9]/;  = 5 digit

// bangladeshi phone number 
re = /^\+880[0-9]{10}$/;  //




// Shorthand Cahracter Classes
re = /\w/;  // word character = alpha, numeric
re = /\w+/;  // one or more
re = /\W/;  // Non word character
re = /\d/;  // Digit Character
re = /\d+/;  // one or more
re = /\D/;  // Non Digit character
re = /\s/;  // Match white space
re = /\S/;  // Match not white space
re = /hello\b/;  // word boundary




// Assertions
re = /x(?=y)/;  // Matches x only if x is before y
re = /x(?!y)/; 



let string_;
string_ = 'hello';
string_ = 'Heallo'
string_ = 'llo';
string_ = 'alllo';
string_ = 'ahello';
string_ = 'again 1hello';
string_ = 'hello';
string_ = 'hello';
string_ = 'aehelllllllo';
string_ = 'helllo';
string_ = '325hello';
string_ = '+8801302050981';
string_ = '*#$%dkiiiedi';
string_ = '01302050981';
string_ = 'hello';
string_ = 'he llo';
string_ = 'hello';
string_ = 'hello545';
string_ = 'fsdfykl';



console.log(re.exec(string_));

function reTest(re, string_) {
    if (re.test(string_)) {
        console.log(`${string_} matches ${re.source}`);
    }
    else {
        console.log(`${string_} doesn't match ${re.source}`);
    }
}
reTest(re, string_);






// Examples
let reg_ex;
let text;

// Postal code
reg_ex = /^[0-9]{4}$/;
text = '3942'

// Phone Number
reg_ex = /^01[0-9]{9}$/;
reg_ex = /^(\+)?(880)?1[0-9]{9}$/;
text = '01302050981'
text = '+8801302050981'

// Email Address
reg_ex = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
text = '463saiful0@gmail.com';


console.log(reg_ex.test(text));



