// Maps 
// Map is an iterable 

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects 

// different between maps and objects 

// objects can only have string or symbol 
// as key 

// in maps you can use anything as key 
// like array, number, string 


// yesma ra object maa main differnce vaneko chai object ko key chai kii string hunxaa kiitaw symbolhunxa
// yesmaa j nii huna paayo

// syntax for map
// const person = new Map();

const person = new Map();
person.set('firstname', 'Arbinnn');
person.set('age', '20');
person.set(1,'one');
// console.log(person);

// .get ley chai value extract garney kaam garxa
// console.log(person.get("firstname"));

// hamley object maa for in loop matra laauna milxa vaney yesmaaa chai dubai of in laauna milxaa


const person1 ={
    id : 1,
    firstname : "Arbinnn"
}

const extrainfo = new Map();
extrainfo.set(person1, {gender:"Male"});
console.log(extrainfo.get(person1).gender)