// lexical scope 

let myvar="value1";
function myapp(){
    const value=()=>{
        console.log("The value is :",myvar);
    }
    console.log(myvar);
value();

}
myapp();