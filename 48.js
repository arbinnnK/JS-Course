// function inside function 

const hello = ()=>{
    const sum =(a,b)=>{
        return a+b;
    }

    const isEven = (number)=>{
        return number%2===0;
    }

    console.log("Hello Arbinnn Koirala");
    console.log(sum(4,5));
    console.log(isEven(2));
}

hello();