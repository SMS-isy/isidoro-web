/**
 * ESERCITAZIONE 1 - LIVELLO BASE
 * Gestione di una Biblioteca di Libri
 * 
 * Obiettivi:
 * - Creare oggetti con proprietÃ  e metodi
 * - Accedere e modificare proprietÃ 
 * - Utilizzare metodi per operazioni base
 * - Lavorare con array di oggetti
 * 
 * Tempo stimato: 30-40 minuti
 */

console.log("=== ESERCITAZIONE 1: BIBLIOTECA DI LIBRI ===\n");

// ============================================================================
// PARTE 1: Creazione di Oggetti Libro (10 minuti)
// ============================================================================

console.log("--- PARTE 1: Creazione Oggetti ---\n");

/**
 * ESERCIZIO 1.1
 * Crea un oggetto 'libro1' con le seguenti proprietÃ :
 * - titolo: "Il Signore degli Anelli"
 * - autore: "J.R.R. Tolkien"
 * - anno: 1954
 * - genere: "Fantasy"
 * - pagine: 1178
 * - disponibile: true
 */

// SCRIVI IL TUO CODICE QUI
const libro1 = {
  titolo: "Il Signore degli Anelli",
  autore: "J.R.R. Tolkien",
  anno: 1954,
  genere: "Fantasy",
  pagine: 1178,
  disponibile: true
};

// Test: decommenta per verificare
console.log("Libro 1:", libro1);


/**
 * ESERCIZIO 1.2
 * Crea un secondo oggetto 'libro2' con i seguenti dati:
 * - titolo: "1984"
 * - autore: "George Orwell"
 * - anno: 1949
 * - genere: "Distopia"
 * - pagine: 328
 * - disponibile: false
 */

// SCRIVI IL TUO CODICE QUI
const libro2 = {
  titolo: "1984",
  autore: "George Orwell",
  anno: 1949,
  genere: "Distopia",
  pagine: 328,
  disponibile: false,
};


// ============================================================================
// PARTE 2: Accesso e Modifica delle ProprietÃ  (10 minuti)
// ============================================================================

console.log("\n--- PARTE 2: Accesso e Modifica ---\n");

/**
 * ESERCIZIO 2.1
 * Stampa il titolo e l'autore del libro1 usando la notazione punto
 * Formato: "Titolo: [titolo] - Autore: [autore]"
 */

// SCRIVI IL TUO CODICE QUI
console.log(`Titolo: ${libro1.titolo} - Autore: ${libro1.autore}`);


/**
 * ESERCIZIO 2.2
 * Modifica la proprietÃ  'disponibile' del libro2 da false a true
 * (qualcuno ha restituito il libro!)
 */

// SCRIVI IL TUO CODICE QUI
libro2.disponibile = true;


/**
 * ESERCIZIO 2.3
 * Aggiungi una nuova proprietÃ  'isbn' al libro1
 * Valore: "978-0544003415"
 */

// SCRIVI IL TUO CODICE QUI
libro1.isbn = "978-0544003415";


// ============================================================================
// PARTE 3: Metodi degli Oggetti (15 minuti)
// ============================================================================

console.log("\n--- PARTE 3: Metodi ---\n");

/**
 * ESERCIZIO 3.1
 * Crea un oggetto 'libro3' con le seguenti proprietÃ  e metodi:
 * 
 * ProprietÃ :
 * - titolo: "Il Nome della Rosa"
 * - autore: "Umberto Eco"
 * - anno: 1980
 * - pagine: 503
 * - disponibile: true
 * 
 * Metodi:
 * - getInfo(): restituisce una stringa con titolo, autore e anno
 *   Formato: "[titolo] di [autore] ([anno])"
 * 
 * - presta(): se disponibile, imposta disponibile a false e stampa
 *   "Libro prestato: [titolo]", altrimenti stampa "Libro non disponibile"
 * 
 * - restituisci(): imposta disponibile a true e stampa
 *   "Libro restituito: [titolo]"
 */

// SCRIVI IL TUO CODICE QUI
const libro3 = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
  pagine: 503,
  disponibile: true,
  
  getInfo: function() {
    return `${this.titolo} di ${this.autore} (${this.anno})`;
  },
  
  presta: function() {
    if(this.disponibile){
      this.diponibile = false;
      console.log("Libro prestato: "+this.titolo);
    }
    else{
      console.log("Libro non disponibile ");
    }
  },
  
  restituisci: function() {
    this.disponibile = true;
    console.log("Libro restituito: "+libro3.titolo);
  }
};

// Test: decommenta per verificare
console.log(libro3.getInfo());
libro3.presta();
libro3.presta(); // Dovrebbe dire che non Ã¨ disponibile
libro3.restituisci();
console.log("Libro disponibile?", libro3.disponibile);


// ============================================================================
// PARTE 4: Array di Oggetti (10 minuti)
// ============================================================================

console.log("\n--- PARTE 4: Array di Oggetti ---\n");

/**
 * ESERCIZIO 4.1
 * Crea un array 'biblioteca' che contenga libro1, libro2 e libro3
 */

// SCRIVI IL TUO CODICE QUI
const biblioteca = [libro1, libro2, libro3];


/**
 * ESERCIZIO 4.2
 * Scrivi una funzione 'cercaPerAutore' che:
 * - Accetta un array di libri e un nome autore come parametri
 * - Restituisce un array con tutti i libri di quell'autore
 * 
 * Suggerimento: usa il metodo filter()
 */

// SCRIVI IL TUO CODICE QUI
function cercaPerAutore(libri, autore) {
  return libri.filter(libro => libro.autore === autore);
}

// Test: decommenta per verificare
const libriTolkien = cercaPerAutore(biblioteca, "J.R.R. Tolkien");
console.log("Libri di Tolkien:", libriTolkien);


/**
 * ESERCIZIO 4.3
 * Scrivi una funzione 'libriDisponibili' che:
 * - Accetta un array di libri come parametro
 * - Restituisce un array contenente solo i libri disponibili
 * 
 * Suggerimento: usa il metodo filter()
 */

// SCRIVI IL TUO CODICE QUI
function libriDisponibili(libri) {
  let v = [];
  for(let i=0; i<biblioteca.length; i++){
    if(libri[i].disponibile == true){
      v.push(libri[i]);
    }
  }
  return v;
}

// Test: decommenta per verificare
const disponibili = libriDisponibili(biblioteca);
console.log("\nLibri disponibili:");
disponibili.forEach(libro => console.log("- " + libro.titolo));


/**
 * ESERCIZIO 4.4
 * Scrivi una funzione 'stampaBiblioteca' che:
 * - Accetta un array di libri come parametro
 * - Stampa le informazioni di ogni libro in formato leggibile
 * 
 * Formato output per ogni libro:
 * "Titolo: [titolo]
 *  Autore: [autore]
 *  Anno: [anno]
 *  Disponibile: [SÃ¬/No]
 *  ---"
 */

// SCRIVI IL TUO CODICE QUI
function stampaBiblioteca(libri) {
  libri.forEach(libro => {
    console.log(`Titolo: ${libro.titolo}`);
    console.log(`Autore: ${libro.autore}`);
    console.log(`Anno: ${libro.anno}`);
    console.log(`Disponibile: ${libro.disponibile ? "SÃ¬" : "No"}`);
    console.log("---");
  });
}

// Test: decommenta per verificare
console.log("\n=== CATALOGO BIBLIOTECA ===");
stampaBiblioteca(biblioteca);


// ============================================================================
// PARTE 5: Sfida Finale (OPZIONALE - 10 minuti)
// ============================================================================

console.log("\n--- PARTE 5: Sfida Finale ---\n");

/**
 * ESERCIZIO 5.1 - SFIDA
 * Crea una funzione 'statisticheBiblioteca' che:
 * - Accetta un array di libri come parametro
 * - Restituisce un oggetto con le seguenti statistiche:
 *   - totaleLibri: numero totale di libri
 *   - libriDisponibili: numero di libri disponibili
 *   - totalePagine: somma delle pagine di tutti i libri
 *   - mediaPagine: media delle pagine per libro (arrotondata)
 *   - autori: array con tutti gli autori (senza duplicati)
 * 
 * Suggerimenti:
 * - Usa reduce() per calcolare le somme
 * - Usa Set per ottenere autori unici
 * - Usa Math.round() per arrotondare
 */

// SCRIVI IL TUO CODICE QUI
function statisticheBiblioteca(libri) {
  // TODO: Calcola le statistiche
  return {
    totaleLibri: 0,
    libriDisponibili: 0,
    totalePagine: 0,
    mediaPagine: 0,
    autori: []
  };
}

// Test: decommenta per verificare
const stats = statisticheBiblioteca(biblioteca);
console.log("\n=== STATISTICHE BIBLIOTECA ===");
console.log("Totale libri:", stats.totaleLibri);
console.log("Libri disponibili:", stats.libriDisponibili);
console.log("Totale pagine:", stats.totalePagine);
console.log("Media pagine:", stats.mediaPagine);
console.log("Autori:", stats.autori.join(", "));


console.log("\n=== FINE ESERCITAZIONE 1 ===");
console.log("Hai completato tutti gli esercizi? Ottimo lavoro!");
console.log("Passa alla prossima esercitazione per continuare l'apprendimento.\n");
