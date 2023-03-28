function insert (a, index, value) {
    a.splice(index, 0, value) // splice 메서드에 (삽입할 위치, 삭제할 항목 수, 삽입할 값)을 순서대로 전달한다.
}

let a = [0, 1, 3, 4]
insert(a, 2, 2) 
console.log(a)