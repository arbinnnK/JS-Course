// don't do this mistake 

const user1 ={
    Name: "Arbinnn",
    Age: 20,
    about: function(){
        console.log(this.Name,this.Age);
    }
}

// hamley yesto gareu vaney undefined aauxa kinaa kii hamley function lai bind nai garya xainam
// const myfunc = user1.about;
// myfunc()


const myfunc = user1.about.bind(user1)
myfunc()