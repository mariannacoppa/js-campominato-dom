// recupero il tag button
const btn = document.getElementById('start');
// recupero il tag che conterrà la griglia
const grid = document.getElementById('grid');
//definisco gli array contenenti il risultato e le bombe
let scoreArray = [];
let bombsArray = [];
// definisco la funzione che crea i quadrati della griglia
function createSquare() {
    // creazione del tag html che diventerà il singolo quadrato della griglia
    const currentElement = document.createElement('div');
    // assegnazione della classe square all'elemento creato
    currentElement.classList.add('square');
    // restituisco il quadrato contenuto nella variabile currentElement
    return currentElement;
}
// definisco la funzione che crea le bombe
function createBombArray() {
    for (let i = 0; i < 16; i++) {
        // genero 16 numeri casuali
        let randomNumber = Math.floor((Math.random() * 100 + 1));
        bombsArray.push(randomNumber);
    }
}
// impedisco la creazione di bombe con lo stesso numero
function removeDuplicates() {
    for (let i = 0; i < bombsArray.length; i++) {
        for (let j = 0; j < bombsArray.length; j++) {
            if (bombsArray[i] == bombsArray[j] && i != j) {
                bombsArray[i] = Math.floor((Math.random() * 100 + 1));
            }
        }
    }
}
// chiamo le funzioni
createBombArray();
removeDuplicates();
// assegno l'evento click al pulsante recuperato nel dom
btn.addEventListener('click', function () {
    // svuoto la griglia da tutti i suoi elementi interni (al click sl pulsante, non  si ripete la griglia)
    grid.innerHTML = '';
    // eseguo un ciclo di 100 iterazioni per creare la griglia
    for (let i = 0; i < 100; i++) {
        
    }
});