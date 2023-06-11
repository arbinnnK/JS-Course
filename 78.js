const usermore =  {
    about : function(){
        return `${this.firstname} is ${this.age} years old`
    },
  is18 : function(){
      return this.age >= 18;
  }
}

function createuser(firstname,lastname,email,age,address,){
    const user ={};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = usermore.about;
    user.is18 = usermore.is18;
return user;
}

const user1 = createuser('Arbinnn','Koirala','arbin47.koirala@gmail.com',18,'Gwarko');
const user2 = createuser('Sakar','Khanal','arbin47.koirala@gmail.com',18,'Gwarko');
const user3 = createuser('Abiral','Tamang','arbin47.koirala@gmail.com',18,'Gwarko');

const val = user1.about();
console.log(val);

const val1 = user2.about();
console.log(val1);