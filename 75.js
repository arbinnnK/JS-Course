// arrow function

// arrow function maa this hunna yesley jaile aafno surrounding baata this linxaaa

const user1 ={
    Name: "Arbinnn",
    Age: 20,
    about: () => {
        console.log(this.Name,this.Age);
    }
}
// unsefined aauxa kinaki aarow function maa this hunna 
user1.about()