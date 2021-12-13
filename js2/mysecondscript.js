//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.

let utente = Math.floor(Math.random()*6+1);

let computer = Math.floor(Math.random()*6+1);

document.getElementById("utent").innerHTML = `numero il tuo numero è:  ${utente}`;
document.getElementById("comp").innerHTML = `numero del computer è :  ${computer}`;


if(utente > computer){
   
    document.getElementById("vincitore").innerHTML = "complimenti hai vinto!!";

}else if(utente == computer){

    document.getElementById("vincitore").innerHTML = "pareggio -.-";

}else{
    
    document.getElementById("vincitore").innerHTML = "ci dispiace, hai perso :(";
   
}

