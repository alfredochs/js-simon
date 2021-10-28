
/* ------------------------------------------------------------------------------------------------------------------------------*/
/**
 * Genera Numeri Random tra 1 e 100
 */
function generateRandomNum(minNumber = 1, maxNumber = 20) {
    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return numRandom;
}

/* ------------------------------------------------------------------------------------------------------------------------------*/
// let conteggioSecondi = 0;
// const intervallo = setInterval(() => {
//     console.log(`intervallo di 1 secondo per ${conteggioSecondi + 1} volte`);
//     conteggioSecondi++;
//     if (conteggioSecondi >= 30) {
//         clearInterval(intervallo);
//     }
// }, 1000);

/*
crea un intervallo di 30 secondi in questo caso con nome const = Intervallo
dentro l'intervallo => si usa il log per vedere il conteggio dei secondi che devono trascorrere per sapere se è il tempo giusto
secIntervallo aggiunge di uno per non partire da 0.
dentro l'if si setta il tempo che deve trascorrere per pulire l'intervallo
*/

//1 Un alert() espone 5 numeri generati casualmente.
//2 Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire uno alla volta, i numeri che ha visto precedentemente, 
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri
// da indovinare sono stati individuati.


/*
numeri casuali = una funzione
dentro l'alert se sono x numeri random, fare un ciclo che andra a inserire x numeri dentro l'alert
devo usare il se timeout che inizierà il conteggio fino a 30 secondi
    dentro il timeout si dovrà usare il prompt per 5 volte per inserire i numeri da ricordare dell'alert
    questi numeri dovranno essere inseriti dentro un contenitore per poi paragonarli col contenitore dell'alert
*/

let numeriAlert = [];
let inputContainer = [];
let confrontoArrays = [];

while (numeriAlert.length < 5) {
    const numeroAlert = generateRandomNum();
    numeriAlert.push(numeroAlert);
}
console.log(`I numeri dell'alert sono ${numeriAlert}`);

alert(numeriAlert);

const timer = setTimeout(function () {

    while (inputContainer < 5) {
        const numeriInput = prompt("Inserisci i numeri dell'alert: ");
        let numeriPerArray = numeriInput.split(" ");
        inputContainer.push(...numeriPerArray);
        // console.log(numeriPerArray);
    }
    console.log(`Array di numeri inseriti dall'utente ${inputContainer}`);
    for (let i = 0; i < inputContainer.length; i++) {
        const numeroInput = parseInt(inputContainer[i]);

        if (numeriAlert.includes(numeroInput)) {
            confrontoArrays.push(numeroInput);
        }
    }
    console.log(`hai indovinato ${confrontoArrays.length} su 5`);

}, 1000);
