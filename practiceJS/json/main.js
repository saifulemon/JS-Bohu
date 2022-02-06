let student = {
    nam: 'Saiful',
    age: 20,
    homeTown: 'feni',
    institute: 'feni computer institute'
};

let convert_json = JSON.stringify(student); // convert JSON
console.log(convert_json);

let student_jsnon = {
    "nam": "Emon",
    "age": 20,
    "phone": 013020,
    "email": "463saiful0@gmail.com"
 }

let normalJsObj = JSON.parse(convert_json);
console.log(normalJsObj);





/*
JSON Data types
1. string
2. number
3. object (JSON object)
4. array
5. boolean
6. null
*/

// Doesn't support undefined, date, function
let person = {
    nam: 'Saiful',  // string
    age: 25,  // number
    hometown: 'feni',
    married: false,  // boolean
    dob: 26-09-2002,  // date
    test_null: null,  // null
    test_undefined: undefined,  // undefined
    greet: function () {  // function
        console.log(`Hello ${this.nam}`);
    }
}


let person_json = JSON.stringify(person);
console.log(person_json);





let student_jsnon = {
    "nam": "Emon",
    "age": 20,
    "phone": 013020,
    "email": "463saiful0@gmail.com"
 }

let convert_json = JSON.stringify(student_jsnon);   // convert JSON 
let convert_obj = JSON.parse(convert_json);   // convert js object

 console.log(convert_obj);






var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {   
        let data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json_obj) {
    //console.log(json_obj);
    let js_obj = JSON.parse(json_obj);
    console.log(js_obj);

    for (x in js_obj.person) {
        // console.log(x);
        console.log(js_obj.person[x]);
    }
}

