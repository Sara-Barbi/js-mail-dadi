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


//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.

let utente1 = (math.floormath.random()*5+1);
let computer = (math.floormath.random()*5+1);

if(utente1 > computer){
    document .getElementById("numeri").innerHTML = "utente1 vincitore";
    
}else{
    document .getElementById("numeri").innerHTML = "utente2 vincitore";
}

