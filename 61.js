// find method

const user = [
    {userid:1,username:"Arbinnn",gender:"Male"},
    {userid:2,username:"Sakar",gender:"Male"},
    {userid:3,username:"Ayun",gender:"Male"},
    {userid:4,username:"Abiral",gender:"Male"}
];

const myuser = user.find((user)=>{
    return user.userid===2;
});
console.log(myuser);