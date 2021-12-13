//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.

let utente1 = (math.floormath.random()*5+1);

let computer = (math.floormath.random()*5+1);

const element = utente1 + computer;

document .getElementById("numeri").innerHTML = element;


if(utente1 > computer){
   
    document .getElementById("numeri").innerHTML = "utente1 vincitore";

}else{

    document .getElementById("numeri").innerHTML = "utente2 vincitore";

}
