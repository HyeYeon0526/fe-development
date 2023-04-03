let persons1 = [];

for (let i = 0 ; i < 10 ; i++) {
    persons1[i] = { name : "홍길동" , age : 16+i}
}
let persons2 = persons1;

persons1[3].name = '이름을 바꾼 배열'

console.log(persons1[3]);
console.log(persons2[3], "얕은복사되었네요");

persons1[3].name = '홍길동'

persons2 = JSON.parse(JSON.stringify(persons1));

persons1[3].name = '이름을 바꾼 배열'

console.log(persons1[3]);
console.log(persons2[3], '깊은복사되었기때문에 값이 그대로네요');
