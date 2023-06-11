// sets (it is iterable)
// store data
// sets also have its own methods 
// No index-based access
// Order is not guarenteed 
// unique items only (no duplication allowed)

// syntax of sets
// const numbers = new Set();

// set is iterable and the value inside set should be unique 

// const numbers= new Set([1,2,3]);
// console.log(numbers);

// const numbers = new Set();
// numbers.add("arbinnn");
// numbers.add("Koirala");
// console.log(numbers);

// ekchoti entry garisakeko value feri liidaina set ley 

// sets is iterable 

const numbers = new Set([1,2,3,4,5,6]);
for(let number of numbers){
    console.log(number);
}


// jaba hamlai unique data waa value rakhnu parxa taba matra set use garney