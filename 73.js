// call 
// apply
// bind

// call -> yesley function borrow garney kaam garxaa


// 1.function inside object
// const user1 ={
//     Name: "Arbinnn",
//     Age: 20,
//     about: function(){
//         console.log(this.Name,this.Age);
//     }
// }


// const user2 ={
//     Name: "Sakar",
//     Age: 21
// }

// user1.about.call(user2);


// 2.function outside object


//  function about(Artist,Favmusician){
//     console.log(this.Name,this.Age,Artist,Favmusician);
// }
//     const user1 ={
//         Name: "Arbinnn",
//         Age: 20,
      
//     }

//         const user2 ={
//             Name: "Sakar",
//             Age: 21
//         }
        
//         about.call(user1,"Salman","Sonu");



// apply-> yesko kaam nii same call jastai ho tara arguement pass garda yekai choti array banayera pathauda hunxaa

//  function about(Artist,Favmusician){
//     console.log(this.Name,this.Age,Artist,Favmusician);
// }
//     const user1 ={
//         Name: "Arbinnn",
//         Age: 20,
      
//     }

//         const user2 ={
//             Name: "Sakar",
//             Age: 21
//         }
        
//         about.apply(user2,["Salman","Sonu"]);


// bind -> yesley chai value return garxa teti matra difference ho