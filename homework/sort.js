
function compareNumber(i,j) { // (3) 배열을 오름차순으로 정렬하기 위한 함수 생성 
    return i - j;
}

a.sort(compareNumber); // 배열을 오름차순으로 정렬 


for (let i = 0 ; i < 100 ; i++){ // 배열 출력 
    console.log(a[i]);
}