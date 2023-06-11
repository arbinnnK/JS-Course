// every method 

// const numbers = [1,3,5,8,9];

// const no = numbers.every((number)=>number%2===0);
// console.log(no);

// it returns the boolean value i.e only true and false 
// yedi sabai value true voo vaney matra true return garxa yedi euta matra value false voo vaney false return garxa



// realistic example

const flipcart=[
    {material:"Mobile", price:3000},
    {material:"Laptop", price:1000},
    {material:"TV", price:2000}
];

const no1=flipcart.every((product)=>{
    return product.price<10000;
});

console.log(no1);
