function sum(a,b) {
    return a+b;
}

function diff(a,b) {
    return a-b;
}

function sumWithMsg(callback, msg) {
    setTimeout(()=> {
        const result = callback(20, 30);
    const fresult = "Hi " + msg + ", your score is: "+result;
    console.log(fresult);
    },2000);
    
}
console.log("Start");
sumWithMsg(sum, "Muskan");
sumWithMsg(diff, "Muskan");
console.log("End");