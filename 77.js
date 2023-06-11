

const user = {
    firstname: "Arbinnn",
    lastname: "Koirala",
    email:"arbin47.koirala@gmail.com",
    age:20,
    address:"House Number, Colony, pincode, state",
    about: function(){
        return `${this.firstname} is ${this.age} years old`
    },
    is18: function(){
        return this.age >= 18;
    }
}

// Ho aba yo mathi ko junn object xaa hamley 100 wota user ko laagi banaunu paryo

// function (that function create object)
// 2.) add key value pair 
// 3.) object lai return garxaaa

function createuser(firstname,lastname,email,age,address,){
    const user ={};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
      return `${this.firstname} is ${this.age} years old`
  };
user.is18 = function(){
    return this.age >= 18;
};
return user;
}

const user1 = createuser('Arbinnn','Koirala','arbin47.koirala@gmail.com',18,'Gwarko');
console.log(user1);

const val = user.about();
console.log(val)