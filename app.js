let friendList= ["Dash", "Dan", "Chase", "Ben", "Alex"];
document.addEventListener("DOMContentLoaded", function(){
    let btnSing = document.createElement ("button");
    btnSing.innerText = "Sing!";
    document.body.appendChild (btnSing);
    btnSing.addEventListener ("click", function() {
        for (let i = 0; i < friendList.length; i++) {
            let friendDiv = document.createElement ("div");
            document.body.appendChild (friendDiv);

            let friendName = document.createElement ("h3")
            friendName.innerText = (friendList[i] + ":")
            friendDiv.appendChild (friendName);

            for (let n = 99; n > 0; n--) {
                let songText = document.createElement ("p");
                friendDiv.appendChild (songText);

                if (n === 2) {
                    songText.innerText = (`${n} lines of code in the file, ${n} lines of code; ${friendList[i]} strikes one out, clears it all out, ${n - 1} line of code in the file`);   
                }
                else if (n === 1) {
                    songText.innerText = (`${n} line of code in the file, ${n} line of code; ${friendList[i]} strikes one out, clears it all out, 0 lines of code in the file`);            
                }
                else {
                    songText.innerText = (`${n} lines of code in the file, ${n} lines of code; ${friendList[i]} strikes one out, clears it all out, ${n - 1} lines of code in the file`);
                }        
            }
        }
    });
});