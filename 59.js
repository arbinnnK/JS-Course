// reduce method

// const numbers=[1,2,3,4,5,6];

// const sum = numbers.reduce(function(accumulator, currentvalue){
//     return accumulator+currentvalue;
// });

//     console.log(sum);

// accumulator      currentvalue        return
//      1                 2                3
//      3                 3                6
//      6                 4                10
//      10                5                15
//      15                6                21



// real life example

const flipcart=[
    {material:"Mobile", price:12000},
    {material:"Laptop", price:12000},
    {material:"TV", price:12000}
];

const Total = flipcart.reduce(function(accumulator,currentvalue){
    return accumulator + currentvalue.price;
}, 0);

console.log(Total);