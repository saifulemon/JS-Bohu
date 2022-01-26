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