function add(num1,num2)
{
    return num1+num2;
}

console.log(add(5,4));


//arrow function

const add_arrow = (num1 = 1, num2 = 1)=> num1+num2;


console.log(add_arrow(5,44));

function person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);

}

const person1 = new person("abul","basar","5-5-1954")

console.log(person1.dob.getFullYear());

class Person{
    constructor(firstname,lastname,dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    
    }
    getFullYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return  `${this.firstname} ${this.lastname} `
    }
}

person2 = new Person("abdul","Khalek","5-12-1954")

console.log(person2.getFullName());