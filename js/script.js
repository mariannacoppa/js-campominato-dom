// recupero il tag button
const btn = document.getElementById('start');
// recupero il tag che conterrà la griglia
const grid = document.getElementById('grid');
//dichiaro l'array del punteggio, delle bombe e la variabile dell'elemento selezionato
let scoreArray = [];
let bombsArray = [];
let selectedItem = -1
let listener = function (event) {
    // console.log(event);
    let selectedItem = parseInt(event.target.innerHTML);
    scoreArray.push(scoreArray[selectedItem]);
    console.log(selectedItem);
            // se clicco una bomba
            if (bombsArray.indexOf(selectedItem, 0) != -1) {
                // la casella diventa rossa
                this.classList.toggle('clicked-red');
                // impedisce di cliccare altre caselle
                removeAllClickListener();
                alert(`Partita terminata! Hai totalizzato ${scoreArray.length - 1} punti`);
            }
            else {
                // aggiungo/tolgo la classe clicked-blue e lo mostro in console
                this.classList.toggle('clicked-blue');
            }
        }

let options = {
    once: true
}

// definisco la funzione che crea i quadrati della griglia
function createSquare() {
    // creazione del tag html che diventerà il singolo quadrato della griglia
    const currentElement = document.createElement('div');
    // assegnazione della classe square all'elemento creato
    currentElement.classList.add('square');
    // restituisco il quadrato contenuto nella variabile currentElement
    return currentElement;
}
function createBombArray() {
    for (let i = 0; i < 16; i++) {
        // genero 16 numeri casuali
        let randomNumber = Math.floor((Math.random() * 100 + 1));
        bombsArray.push(randomNumber);
    }
}
function removeDuplicates() {
    for (let i = 0; i < bombsArray.length; i++) {
        for (let j = 0; j < bombsArray.length; j++) {
            if (bombsArray[i] == bombsArray[j] && i != j) {
                bombsArray[i] = Math.floor((Math.random() * 100 + 1));
            }
        }
    }
}
function removeAllClickListener() {
    let squareArray = document.body.getElementsByClassName("square")

    for (let i = 0; i < squareArray.length; i ++) {
        squareArray[i].removeEventListener('click', listener, false);
    }
}

// chiamo le funzioni
createBombArray();
removeDuplicates();

// assegno l'evento click al pulsante recuperato nel dom
btn.addEventListener('click', function () {
    // svuoto la griglia da tutti i suoi elementi interni (al click sl pulsante, non  si ripete la griglia)
    grid.innerHTML = '';
    // eseguo un ciclo di 100 iterazioni per creare una griglia
    for (let i = 0; i < 100; i++) {
        // creo il singolo quadrato chiamando la funzione createSquare
        let currentSquare = createSquare();
        // aggiungo l'evento click al quadrato creato
        currentSquare.addEventListener('click', listener, options);
        // assegno il numero progressivo
        currentSquare.innerText = i + 1;
        // appendo il quadrato all'interno della griglia
        grid.append(currentSquare);
    }
});