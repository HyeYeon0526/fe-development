// move(a) 함수 구현 
function move(a) {
    a.unshift(a.pop());
}

let a = [1, 2, 3, 4, 5];

for (let i = 0; i < 3; ++i) { 
    move(a);
    console.log(a); 
}