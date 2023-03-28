function remove(a, index) {
    a = a.splice(index,1); // a 배열에서 index 위치의 항목을 한개 삭제하는 메소드
} 

let a = [0, 1, 2, 3, 4] 
remove(a, 2) 
console.log(a)