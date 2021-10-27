
alertNumbersRandom();

let conteggioSecondi = 0;
const intervallo = setInterval(() => {
    console.log(`intervallo di 1 secondo per ${conteggioSecondi + 1} volte`);
    conteggioSecondi++;
    if (conteggioSecondi >= 30) {
        clearInterval(intervallo);
    }
}, 1000);

/*
crea un intervallo di 30 secondi in questo caso con nome const = Intervallo
dentro l'intervallo => si usa il log per vedere il conteggio dei secondi che devono trascorrere per sapere se è il tempo giusto
secIntervallo aggiunge di uno per non partire da 0.
dentro l'if si setta il tempo che deve trascorrere per pulire l'intervallo
*/

// const clockInterval2 = setInterval(() => {
//     console.log("log eseguito dopo x tempo", clockInterval2);
// }, 1500);

// console.log(clockInterval);
// console.log(clockInterval2);

// setTimeout(() => console.log("questo è il primo timeout"), 1000);
// setTimeout(() => console.log("questo è il secondo timeout"), 2000);
// setTimeout(() => console.log("questo è il terzo timeout"), 3000);
// setTimeout(() => console.log("questo è il quarto timeout"), 4000);



// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


/* 
mostro l'alert con i numeri random da ricordare
una volta nascosto l'alert faccio partire i 30 secondi in cui devo inserire i numeri random da ricordare

*/

/* ------------------------------------------------------------------------------------------------------------------------------*/
/**
 * Genera Numeri Random tra 1 e 100
 * @returns 
 */
function generateRandomNum(minNumber = 1, maxNumber = 100) {
    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return numRandom;
}

/**
 * genera l'alert con 5 numeri random diversi. Se li avessi assegnati ad una costante il numero random sarebbe lo stesso per tutti e 5
 */
function alertNumbersRandom() {
    alert(`
    ${generateRandomNum()}
    ${generateRandomNum()}
    ${generateRandomNum()}
    ${generateRandomNum()}
    ${generateRandomNum()}`);
}

function promptGenerator() {
    prompt("Inserisci i numeri dell'alert: ");
}