// call back function



function myfunc(a){
    // console.log(a);
    console.log("This is my function 1");
    a("Arbinnnn");
}


function myfunc2(name){
    console.log("this is my callback function");
    console.log(`my name is ${name}`);
}

myfunc(myfunc2); 

