// param destructuring

// object
// most use in react

const person ={
    name:"Arbinnn",
    gender:"Male",
}

// function printdetails(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
// }

function printdetails({name,gender}){
    console.log(name);
    console.log(gender);
}
console.log(printdetails(person));