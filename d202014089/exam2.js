function dice() {
    let diceN = Math.floor(Math.random() * 6 + 1);
    return diceN;
}

for (let i = 0; i < 10; ++i) 
    console.log(dice());