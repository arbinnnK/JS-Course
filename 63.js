// some method 
// yedi euta matra value satisfy garyo vaney pani true return garxa 

const numbers =[1,3,5,8,9];
const no = numbers.some((number)=>{
    return number%2===0;
});
console.log(no);