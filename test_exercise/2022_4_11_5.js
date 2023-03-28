function add(a, ...values) {
    for (let value of values){
        a.push(value); // a 배열의 끝에 값들을 추가하는 add 함수
    }
} 

let a = [0, 1]
add(a, 2, 3, 4, 5) 
console.log(a)