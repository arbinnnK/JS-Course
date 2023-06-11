//  Prototype 

// Javascript Prototype --> function + object
// function maa chai hamlai freespace diyeko hunxa teslai nai prototype vaninxa 

function hello(){
    console.log("Hello world");
}
hello();

if(hello.prototype){
console.log("Here exist prototype");
}else{
    console.log("Prototype doesnot exist");
}

hello.prototype.abc="abc"

console.log(hello.prototype)