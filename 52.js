// rest parameters 

// function myfunc(a, b, ...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myfunc(1,2,3,4,5,6);


// myfunc(1,2,3,4,5,6,7)

function sum(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total;
}
let ans = sum(1,2,3,4,5);
console.log(ans);