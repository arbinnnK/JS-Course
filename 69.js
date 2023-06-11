// clone using Object.assign

// memory

const obj1 ={
    key1 : "value1",
    key2 : "value2"
}

// euta yesari object lai spread garna sakinxaa
// euta yesari object lai spread garna sakinxaa
// const obj2 = {...obj1};

// arko chai yesari garna sakinxa
const obj2 = Object.assign({}, obj1)
obj1.key3 = "value3";
console.log(obj2);