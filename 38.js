// how to iterate object

// there are two methods to iterate object
// 1. for in loop
// 2. object.keys

// 1. for in loop 

const person ={name:"Arbinnn",age:20, "person hobbies":["swimming","coding"]};

// for(let key in person){
//     // console.log(key);
//     // console.log(person[key]);
//     // console.log(`${key} : ${person[key]}`);
//     // console.log(key, " : ", person[key]);
// }

// 2. Object.keys method
// console.log(Object.keys(person));

for(let key of Object.keys(person)){
    console.log(key,person[key]);

}