// filter method - it only return true value

const numbers=[1,2,3,4];

const evennumbers = numbers.filter(function(number){
    return number % 2===0;
});

console.log(evennumbers);