let persons = [
    { name: '홍길동', age: 16 }, 
    { name: '임꺽정', age: 17 }, 
    { name: '전우치', age: 18 }, 
    { name: '성춘향', age: 19 }
]

let a1 = [];
let a2 = [];


 for (let person in persons) {
    if (persons[person].age / 2 != 0)
        a1.push(persons[person]); 
    else (persons[person].age / 2 == 0)
        a2.push(persons[person]);
 }
 
 console.log(a1) 
 console.log(a2)