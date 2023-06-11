// sort method 
// aba sorting vaneko chai number string lai sort garna use hunxa 

// const numbers = [12,13,4,5,7];
// numbers.sort();
// console.log(numbers);
// ho hamley yesto garda chai no sort taw hunxa tara number lai pani string ko rupp maa herxa JS ley 


// const names = ["Arbinnn","Abiral","Sakar","Ayun"];
// names.sort();
// console.log(names);



// aba mathi ko problem lai kasari solve garney taw 
// sort pani call back function jasari kaam garxa so hamley function call garna sakxau sort vitra pani

// const numbers = [12,24,13,24,3,5];
// numbers.sort((a,b)=>{
// return a-b;
// })
// console.log(numbers);


// so real life example of sorting 
// Daraz waa flipcart maa use hunxa as suppose hamlai chai junn saamaan sasto xaa teslai mathi dekhayera mahango lai tala tira jharne

const daraz1=[
    {productid:1,productname:"p1",price:10000},
    {productid:2,productname:"p2",price:5000},
    {productid:3,productname:"p3",price:100},
    {productid:4,productname:"p4",price:800},
    {productid:5,productname:"p5",price:10900}
];

daraz1.sort(function(a,b){
    return a.price - b.price;
});
console.log(daraz1);