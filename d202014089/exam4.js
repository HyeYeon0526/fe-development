function removes(args) {
    let a = [];
    for (let arg of args){
        if(arg % 3 != 0){
            a.push(arg);
        }
        else{
            continue;
        }
    }
    return a;

}

console.log(removes([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
console.log(removes([11, 12, 13, 14, 15]));