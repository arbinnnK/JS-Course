// getters and setters 


class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    get fullname(){
        return`${this.firstname} ${this.lastname}`
    }
    set fullname(fullname){
       const [firstname, lastname] = fullname.split(" ");
       this.firstname=firstname;
       this.lastname=lastname;
    }

    
}

const person1 = new Person("Arbinnn","Koirala",20);
console.log(person1.fullname)

person1.fullname = "Abhishek koirala";
console.log(person1)

