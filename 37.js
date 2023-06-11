// difference between dot and bracket notation

const key ="email";
const person ={name:"Arbinnn",age:20, "person hobbies":["swimming","coding"]};

// person.person hobbies
console.log(person["person hobbies"]);

person[key]="arbin47.koirala@gmail.com";
console.log(person);