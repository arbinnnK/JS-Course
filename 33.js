// using for of loop in array

let fruits=["apple","banana","mango"];
let fruits1=[];
for(let fruit of fruits){
    console.log(fruit);
    fruits1.push(fruit.toUpperCase());
}
console.log(fruits1);