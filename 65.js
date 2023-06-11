// splice method 
// start, delete, insert
// yo splice method vaneko chai array maa kei kura thapna waa array maa vaako kei kura delete  garna kaam laaagxa

const array1 =["item1", "item2", "item3", "item4"];


// method of deleting item
// const deleteitem = array1.splice(1,2);
// console.log(deleteitem);
// console.log(array1);

// method of inserting some item
array1.splice(1,0,"inserted item");
console.log(array1);