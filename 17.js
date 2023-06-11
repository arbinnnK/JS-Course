// nested if else

// wining number = 19
// if wining number < 19 tooo low
// if wining number > 19 tooo high

let wining = 19;
let userguess = +prompt("Guess a number");

if(userguess === wining){
    console.log("Correct number");
}
else{
    if(userguess<wining){
        console.log("Too low number");
    }else{
        console.log("Too high number");
    }
}