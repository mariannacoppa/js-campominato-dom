
// definisco la funzione che crea i quadrati della griglia
function createSingleSquare (num, sideNumber) {
    // creazione del tag html che diventerà il singolo quadrato della griglia
    const square = document.createElement('div');
    // assegnazione della classe square all'elemento creato
    square.classList.add('square');
    // determino altezza e larghezza del quadtrato
    let sideLength = `calc(100% / ${sideNumber})`;
    square.style.width = sideLength;
    square.style.height = sideLength;
    // aggiungo il numero all'interno del div
    square.innerText = num + 1;
    //  aggiungo l'ebento click al quadrato
    square.addEventListener('click', function () {
        // aggiungo classe clicked all'elemento cliccato
        this.classList.add('clicked-blue');
        // mostro in consol il numero della classe cliccata
        console.log(this.innerText);
    });
    // restituisco il quadrato contenuto nella variabile square
    return square;
}
// definisco la funzione che genera la griglia. Essa crea i quadrati singoli
function generateGrid(cellsNumber, sideNumber) {
    // recupero il tag che conterrà la griglia nel dom
    const grid = document.getElementById('grid');
    // ciclo per creare le singole caselle
    for (let i = 0; i < cellsNumber; i++) {
        // creo il singolo elemento
        let item = createSingleSquare(i, sideNumber);
        // appendo item alla griglia
        grid.append(item);
    }
}
// funzione che genera una nuova partita
function createNewGame() {
    // riprendo il livello di difficoltà
    let difficulty = parseInt(document.getElementById('difficulty').value);
    // verifico che il livello di difficoltà sia stato selezionato
    if (difficulty != '') {
        // svuoto la griglia da tutti i suoi elementi interni (al click sl pulsante, non  si ripete la griglia)
        grid.innerHTML = '';
        // devo memorizzare il numero di caselle totali e per lato
        let totalCells;
        let sideCells;
        // switch per determinare i valori delle 2 sopra
        switch (difficulty) {
            case 1: 
                totalCells = 100;
                sideCells = 10;
                break;
            case 2: 
                totalCells = 81;
                sideCells = 9;
                break;
            case 3: 
                totalCells = 49;
                sideCells = 7;
                break;
            default:
                console.log('Seleziona la difficoltà');
        }
        // per generare le caselle, eseguo una funzione che genera la griglia
        generateGrid(totalCells, sideCells);
    }
    else {
        alert('Non hai selezionato la difficoltà');
    }
}
// recupero il tag button
const button = document.getElementById('start');
// assegno l'evento click al pulsante recuperato nel dom
button.addEventListener('click', function () {
    // chiamo la funzione che genera la nuova partita
    createNewGame();
});