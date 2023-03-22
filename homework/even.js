let a = []; // (1) 빈 배열을 만든다 

for (let i = 0 ; i < 100 ; i++){ // (2) 배열에 정수 랜덤값을 채운다 
    a[i] = Math.floor(Math.random()*100);
}

function compareNumber(i,j) {
    return i - j;
}

a.sort(compareNumber);

for (let i of a){
    if(a[i] % 2 == 0){
        a.splice(i,1);
    }
}

for (let i of a){
    console.log(a[i]);
}
