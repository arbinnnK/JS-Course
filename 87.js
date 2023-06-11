// inheritance

class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    iscute(){
        return this.age<= 1;
    }
}

// const animal1 = new Animal("tom", 2);
// console.log(animal1)
// console.log(animal1.eat());

class Dog extends Animal{

}
const tommy = new Dog("Bhupesh",21);
console.log(tommy)
console.log(tommy.iscute())