// map method

const person =[
    {name:"Arbinnn",gender:"male"},
    {name:"Sakar",gender:"male"},
    {name:"Ayun",gender:"male"},
    {name:"Abiral",gender:"male"}
];

const username = person.map(function(user){
        return user.name;
});

console.log(username);