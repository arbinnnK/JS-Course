// for loop in array

let fruits=["apple","banana","grapes","mango","litchi"];
let fruits2=[];

for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);