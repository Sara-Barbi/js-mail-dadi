//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.

let utente = Math.floor(Math.random()*6+1);

let computer = Math.floor(Math.random()*6+1);

document.getElementById("utent").innerHTML = utente;
document.getElementById("comp").innerHTML = computer;


if(utente > computer){
   
    document.getElementById("vincitore").innerHTML = "utente vincitore";

}else if(utente == computer){

    document.getElementById("vincitore").innerHTML = "pareggio";

}else{
    
    document.getElementById("vincitore").innerHTML = "computer vince";
   
}
