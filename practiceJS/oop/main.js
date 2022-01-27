// Class (ES6)
// Class is a template for creating object

class Person {
    constructor(firstName, lastName, birthday) {
        this.fName = firstName;
        this.lName = lastName;
        this.dob = birthday;
    }

    calcAge() {
        let birthDay = new Date(this.dob);
        let diff = Date.now() - birthDay.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullName(){
        console.log(`${this.fName} ${this.lName}`);
    }
}

let person1 = new Person('Saiful', 'Emon', '11-12-1998');
let person2 = new Person('Abu', 'Hasnat', '11-12-1998');
let person3 = new Person('Saikat', 'Noman', '12-09-2002');

console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3.fullName());


console.log(person1.calcAge());
console.log(person2.calcAge());
console.log(person3.calcAge());






// Sub Class
// Inheritance

class Person {   // Base class
    constructor (fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    greetings () {
        return `Hello ${this.firstName} ${this.lastName}`
    }

}

class Customer extends Person {  // sub class
    constructor (fName, lName, phone, membership) {
        super(fName, lName)
        this.phone = phone;
        this.membership = membership;
    }

    fullName () {
        return `${this.fName} ${this.lName}`;
    }
}

let person1 = new Person('Saiful', 'Emon');
console.log(person1.firstName);

let customer1 = new Customer('Saiful', 'Islam', '5645641', '667');
console.log(customer1.fullName());
console.log(customer1.greetings());





// static function
class Student {
    constructor (fname, roll) {
        this.nam = fname;
        this.roll = roll;
    }

    greetings () {
        console.log(`Hello ${this.nam}!`);
    }

    static test () {
        console.log('I am static function');
    }
}

let stu1 = new Student('Saiful Emon', 484079);

console.log(stu1.greetings());
console.log(Student.test());

