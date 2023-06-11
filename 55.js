// function returning function
  
function myfunc(){
    function myfunc2(){
        console.log("my name is Chandler Bing");
    }
    return myfunc2;
}

const ans=myfunc();
// console.log(ans);
ans();
