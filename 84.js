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

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}