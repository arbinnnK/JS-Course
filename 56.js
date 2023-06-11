// important array method 

// foreach method 
// map method 
// filter method 
// reduce method 


// Foreach method 

// const numbers =[4,2,3,8];

// function multiplybytwo(number, index){
//     console.log(`The number is ${number} and the index is ${index}`);
// }

// for(let i=0;i<numbers.length;i++){
//     multiplybytwo(numbers[i],i);
// }


// for each method is same as callback function:

// numbers.forEach(multiplybytwo);

// numbers.forEach(function(number, index){
//     console.log(`The number is ${number} and the index is ${index}`);
// });

// numbers.forEach(function(number,index){
//     console.log(`${number}*2=${number*2}`);
// });


const person =[
    {name:"Arbinnn",gender:"male"},
    {name:"Sakar",gender:"male"},
    {name:"Ayun",gender:"male"},
    {name:"Abiral",gender:"male"}
];

person.forEach(function(number){
    console.log(number.name);
})