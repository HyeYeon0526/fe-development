let a = [1, "a", 2, "c", 4, "d", 5, "e", "f", 6, 7];
let textType = 0;
let numType = 0;

for (let as of a) {
    if(typeof(as) == "string") { // 배열의 타입이 string인 경우 
        textType++;
    }
    else{ // 배열의 타입이 string이 아닌 타입(숫자)인 경우
        numType++;

    }
}

console.log("number : " + numType + " string : " + textType);
