const myEmail = ["sarabarbi02@gmail.com","mionome@miosito.it", "mario.tecca@ilsito.org", "mario@il.miosito.it"];

const cerca = prompt("inserisci la tua email.");

let controlloEm = false;

for(let i = 0, i = myEmail.length, i++){
    if(cerca == myEmail[i]){
        controlloEm = true "email verificata!"
    }
}

document.getElementById("elem").innerHTML = controlloEm