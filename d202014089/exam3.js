function types(args) {
    let a = [];
    let b;
    for(let arg of args){
        b = typeof arg;
        a.push(b);
    }
    return a;
}

console.log(types([3, "hello", true])); 
console.log(types(["world", []]));