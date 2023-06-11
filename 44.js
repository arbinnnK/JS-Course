// functions - function vaneko mchai programming maa noker jastai ho 
// function maa different kuraa hunxa just like parameters and arguement



// function song(){
//     console.log("Happy birthday to you");
// }
// song();

// function sum(){
//     console.log(2+3);
// }
// sum();


// function that can return the value 
// function sum(a, b){
//     return(a+b);
// }
// console.log(sum(4,5));



// function can return anything

// function bannaa jasley chai number even xaa vaney true return garos raa number odd xaa vaney false return garos 

// function isEven(number){
//     if(number%2===0){
//         return true;
//     }
//     return false;   
// }
// console.log(isEven(3));



// function firstchar(Anystring){
//     return (Anystring[0]);
// }
// console.log(firstchar("Arbinnn"));



// function 
// input : array, target (number)
// output : yedi vetiyo vaney index value dinxa haina vaney -1 return garxa

function findtarget(array, target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const array =[1, 2, 3, 8];
const ans = findtarget(array, 8);
console.log(ans);