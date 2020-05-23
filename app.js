let friendList= ["Dash", "Dan", "Chase", "Ben", "Alex"];
for (let i = 0; i < friendList.length; i++) {
    console.log(friendList[i] + ":")
    for (let n = 99; n > 0; n--) {
        if (n === 2) {
            console.log(`${n} lines of code in the file, ${n} lines of code; ${friendList[i]} strikes one out, clears it all out, ${n - 1} line of code in the file`);   
        }
        else if (n === 1) {
            console.log(`${n} line of code in the file, ${n} line of code; ${friendList[i]} strikes one out, clears it all out, 0 lines of code in the file`);            
        }
        else {
            console.log(`${n} lines of code in the file, ${n} lines of code; ${friendList[i]} strikes one out, clears it all out, ${n - 1} lines of code in the file`);
        }        
    }
}