// default parameters


// pahila yedi undefined vaako case maa hami yesari solve gartheum

// function sum(a,b){
//     if(typeof b==="undefined"){
//          b=0;
//     }
//     return a+b;
// }
// console.log(sum(4));

// direct default parameters use garney

function sum(a,b=0){
 
    return a+b;
}
console.log(sum(4));
