function printTime(msg) { 
    console.log(msg, new Date()); 
} 
for(let i = 0 ; i < 10; i++){
    setInterval(printTime, 1000, "");
    
}

