function removeRight(a, count) {
    for (let i = 0 ; i < count; i++){
        a.pop(); // a의 오른쪽 끝에서 count개의 항목을 제거하는 함수
    }
}

let a = [0, 1, 2, 3, 4] 
removeRight(a, 2) 
console.log(a)