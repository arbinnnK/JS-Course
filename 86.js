// class keyword

class createuser{
    constructor(firstname,lastname,email,age,address){
        console.log("Constructor called")
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
    }

    about(){
        return `${this.firstname} is ${this.age} years old`
    }

    is18(){
        return this.age >= 18; 
    }
}

const user1 = new createuser('Arbinnn','Koirala','arbin47.koirala@gmail.com',18,'Gwarko');
// const user2 = new createuser('Sakar','Khanal','arbin47.koirala@gmail.com',18,'Gwarko');
// const user3 = new createuser('Abiral','Tamang','arbin47.koirala@gmail.com',18,'Gwarko');

console.log(user1.firstname);
