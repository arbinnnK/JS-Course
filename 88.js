//  super 

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return`${this.name}is eating`;
    }
    iscute(){
        return this.age>=1;
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age)
        this.speed=speed;
    }
    run(){
        return `${this.name} is running ${this.speed}`;
    }
}

const tommy = new Dog("tommy",2,45);
console.log(tommy.run());