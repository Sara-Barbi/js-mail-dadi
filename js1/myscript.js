const myEmail = ["sarabarbi02@gmail.com","mionome@miosito.it", "mario.tecca@ilsito.org", "mario@il.miosito.it"];

const cerca = prompt("inserisci la tua email.");

let controlloEm = false;

for(let index = 0 ; index < myEmail.length ;index++){
    if(cerca == myEmail[index]){
        controlloEm = true;
    }
}
if(controlloEm){
    document .getElementById("elem").innerHTML = "email verificata";
}else{
    document .getElementById("elem").innerHTML = "email NON verificata";
}








