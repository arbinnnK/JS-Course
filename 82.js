// const usermore =  {
//     about : function(){
//         return `${this.firstname} is ${this.age} years old`
//     },
//   is18 : function(){
//       return this.age >= 18;
//   }
// }

function createuser(firstname,lastname,email,age,address,){
    const user = Object.create(createuser.prototype);
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
 
return user;
}

createuser.prototype.about = function(){
    return `${this.firstname} is ${this.age} years old`
};
createuser.prototype.is18 =  function(){
    return this.age >= 18;
}





const user1 = createuser('Arbinnn','Koirala','arbin47.koirala@gmail.com',18,'Gwarko');
const user2 = createuser('Sakar','Khanal','arbin47.koirala@gmail.com',18,'Gwarko');
const user3 = createuser('Abiral','Tamang','arbin47.koirala@gmail.com',18,'Gwarko');

console.log(user1.about())
console.log(user2.about())
console.log(user1)