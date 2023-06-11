// methods
// function inside object
// this.

function info(){
    console.log(`The name is ${this.fname} and age is ${this.age}`)
}

const person1 ={
    fname : "Arbinnn",
    age: 20,
    about : info
}

const person2 ={
    fname : "Arbinnn",
    age: 20,
    about : info
}

const person3 ={
    fname : "Arbinnn",
    age: 20,
    about : info
}

// info()

person1.about()
person2.about()
person3.about()