function average(avgs) {
    let sum;
    for(avg of avgs){
        sum += avg;
    }
    return sum / avgs;
}

console.log(average(1, 2, 3, 4)); 
console.log(average(1, 2, 3, 4, 5)); 
console.log(average(1, 2, 3, 4, 5, 6));