//  New Keyword

// advantage of new keyword
// 1.) empty object this={}
// 2.) return this
// 3.)Object.create(createuser.prototype); yo lekhnu pardaina access garna

// function createuser(firstname, age){
// this.firstname = firstname;
// this.age = age;
// }

// createuser.prototype.about = function(){
//     console.log(this.firstname, this.age);
// }

// const user1 = new createuser("Arbinnn",20);

// user1.about();



function createuser(firstname,lastname,email,age,address,){
    // const user = Object.create(createuser.prototype);
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
 }

createuser.prototype.about = function(){
    return `${this.firstname} is ${this.age} years old`
};
createuser.prototype.is18 =  function(){
    return this.age >= 18;
}





const user1 = new createuser('Arbinnn','Koirala','arbin47.koirala@gmail.com',18,'Gwarko');
const user2 = new createuser('Sakar','Khanal','arbin47.koirala@gmail.com',18,'Gwarko');
const user3 = new createuser('Abiral','Tamang','arbin47.koirala@gmail.com',18,'Gwarko');

console.log(user1.about())
console.log(user2.about())
console.log(user1)