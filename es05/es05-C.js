/**
 * ESERCITAZIONE 4 - JSON E SERIALIZZAZIONE
 * Gestione Dati Biblioteca con JSON
 * 
 * Obiettivi:
 * - Convertire oggetti in JSON con JSON.stringify()
 * - Parsare JSON in oggetti con JSON.parse()
 * - Utilizzare parametri replacer e reviver
 * - Gestire errori di parsing
 * - Salvare e recuperare dati (localStorage simulato)
 * - Lavorare con dati complessi e Date
 * 
 * Tempo stimato: 40-50 minuti
 */

console.log("=== ESERCITAZIONE 4: JSON E SERIALIZZAZIONE ===\n");

// ============================================================================
// PARTE 1: Serializzazione Base con JSON.stringify() (10 minuti)
// ============================================================================

console.log("--- PARTE 1: Serializzazione Base ---\n");

/**
 * ESERCIZIO 1.1
 * Crea un oggetto libro con le seguenti proprietÃ :
 * - titolo: "Il Nome della Rosa"
 * - autore: "Umberto Eco"
 * - anno: 1980
 * - genere: "Giallo"
 * - pagine: 503
 * - disponibile: true
 * 
 * Poi converti l'oggetto in una stringa JSON usando JSON.stringify()
 * e salvala in una variabile 'libroJSON'
 */

// SCRIVI IL TUO CODICE QUI
const libro = {
  titolo: "Il Nome Della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
  genere: "Giallo",
  pagine: 503,
  disponibile: true
};

// TODO: Converti in JSON
const libroJSON = JSON.stringify(libro);

// Test: decommenta per verificare
console.log("Oggetto originale:", libro);
console.log("JSON stringa:", libroJSON);
console.log("Tipo:", typeof libroJSON);


/**
 * ESERCIZIO 1.2
 * Crea un array 'biblioteca' con almeno 3 libri diversi.
 * Converti l'intero array in JSON usando JSON.stringify()
 * con indentazione di 2 spazi per renderlo leggibile.
 * 
 * Salva il risultato in 'bibliotecaJSON'
 */

// SCRIVI IL TUO CODICE QUI
const biblioteca = [
  {titolo: "Il Nome Della Rosa" , autore: "Umberto Eco" , anno: 1980},
  {titolo: "1984" , autore: "George Orwell" , anno:1949},
  {titolo: "Berserk Volume 1" , autore: "Kentaro Miura" , anno: 1989}
];

// TODO: Converti in JSON con indentazione
// Utilizza il secondo parametro di JSON.stringify() per l'indentazione
// Vedi documentazione: JSON.stringify(value, replacer, space)
// Sul sito MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters
const bibliotecaJSON = JSON.stringify(biblioteca, null, 2);

// Test: decommenta per verificare
console.log("\nBiblioteca JSON (formattato):");
console.log(bibliotecaJSON);


/**
 * ESERCIZIO 1.3
 * Dato l'oggetto libroCompleto con varie proprietÃ ,
 * converti in JSON SOLO le proprietÃ : titolo, autore e anno.
 * 
 * Usa il parametro 'replacer' di JSON.stringify() come array
 */

const libroCompleto = {
  titolo: "Cent'anni di solitudine",
  autore: "Gabriel GarcÃ­a MÃ¡rquez",
  anno: 1967,
  genere: "Realismo magico",
  pagine: 432,
  isbn: "978-0060883287",
  disponibile: true,
  dataAcquisto: "2024-01-15"
};

// SCRIVI IL TUO CODICE QUI
// TODO: Converti solo titolo, autore e anno
const libroFiltrato = JSON.stringify(libroCompleto , ["titolo" , "autore" , "anno"]);

// Test: decommenta per verificare
console.log("\nLibro filtrato (solo titolo, autore, anno):");
console.log(libroFiltrato);


// ============================================================================
// PARTE 2: Deserializzazione con JSON.parse() (10 minuti)
// ============================================================================

console.log("\n--- PARTE 2: Deserializzazione ---\n");

/**
 * ESERCIZIO 2.1
 * Data la stringa JSON qui sotto, convertila in un oggetto JavaScript
 * usando JSON.parse() e salvala nella variabile 'libroRecuperato'
 */

const jsonString = '{"titolo":"Don Chisciotte","autore":"Miguel de Cervantes","anno":1605,"pagine":863,"disponibile":true}';

// SCRIVI IL TUO CODICE QUI
// TODO: Parsa la stringa JSON
const libroRecuperato = JSON.parse(jsonString);

// Test: decommenta per verificare
console.log("Libro recuperato:", libroRecuperato);
console.log("Tipo:", typeof libroRecuperato);
console.log("Titolo:", libroRecuperato.titolo);


/**
 * ESERCIZIO 2.2
 * Data la stringa JSON dell'array di libri, convertila in un array JavaScript.
 * Poi stampa il titolo di ogni libro usando forEach()
 */

const arrayJSON = '[{"titolo":"Orgoglio e Pregiudizio","autore":"Jane Austen","anno":1813},{"titolo":"Moby Dick","autore":"Herman Melville","anno":1851},{"titolo":"Guerra e Pace","autore":"Lev Tolstoj","anno":1869}]';

// SCRIVI IL TUO CODICE QUI
// TODO: Parsa l'array JSON
const libriArray = JSON.parse(arrayJSON);

// TODO: Stampa i titoli
libriArray.forEach(libro => { console.log("Titolo: "+libro.titolo) });

// Test: decommenta per verificare
console.log("\nNumero di libri:", libriArray.length);


/**
 * ESERCIZIO 2.3
 * Gestione errori: prova a parsare questa stringa JSON non valida.
 * Usa try-catch per catturare l'errore e stampare un messaggio appropriato.
 */

const jsonNonValido = '{"titolo":"Libro Rotto","autore":"Sconosciuto",}'; // Virgola finale non valida

// SCRIVI IL TUO CODICE QUI
// TODO: Usa try-catch per gestire l'errore
try {
  const risultato = JSON.parse(jsonNonValido)
} catch (errore) {
  console.log("ERRORE");
}


// ============================================================================
// PARTE 3: Parametri Avanzati - Replacer e Reviver (15 minuti)
// ============================================================================

console.log("\n--- PARTE 3: Replacer e Reviver ---\n");

/**
 * ESERCIZIO 3.1
 * Crea un oggetto 'utente' con le seguenti proprietÃ :
 * - nome: "Mario Rossi"
 * - email: "mario@example.com"
 * - password: "segreta123"
 * - ruolo: "admin"
 * 
 * Converti in JSON ESCLUDENDO la password usando una funzione replacer.
 * 
 * Suggerimento: il replacer Ã¨ una funzione (key, value) => { ... }
 * Se key === "password" restituisci undefined, altrimenti value
 */

// SCRIVI IL TUO CODICE QUI
const utente = {
  nome: "Mario Rossi",
  email: "mario@example.com",
  password: "segreta123",
  ruolo: "admin"
};

// TODO: Crea funzione replacer
function replacerSicuro(key, value) {
  if(key === "password"){return undefined;}
  return value;
}

// TODO: Converti usando il replacer
const utenteJSON = JSON.stringify(utente, replacerSicuro);

// Test: decommenta per verificare
console.log("Utente JSON (senza password):");
console.log(utenteJSON);


/**
 * ESERCIZIO 3.2
 * Dato questo oggetto con Date, convertilo in JSON.
 * Nota: le Date vengono convertite automaticamente in stringhe ISO.
 */

const prestito = {
  libro: "Il Piccolo Principe",
  utente: "Laura Bianchi",
  dataPrestito: new Date("2024-03-01"),
  dataScadenza: new Date("2024-03-15"),
  restituito: false
};

// SCRIVI IL TUO CODICE QUI
// TODO: Converti in JSON
const prestitoJSON = JSON.stringify(prestito, null, 2);

// Test: decommenta per verificare
console.log("\nPrestito JSON:");
console.log(prestitoJSON);
console.log("\nNota: le Date sono stringhe ISO");


/**
 * ESERCIZIO 3.3
 * Parsa il JSON del prestito e converti le stringhe di date
 * NUOVAMENTE in oggetti Date usando una funzione reviver.
 * 
 * Suggerimento: controlla se il valore Ã¨ una stringa che sembra una data ISO
 * (formato: "YYYY-MM-DDTHH:mm:ss.sssZ") e convertila con new Date()
 */

// SCRIVI IL TUO CODICE QUI
function reviverDate(key, value) {
  if(typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)){
    return new Date(value);
  } 
  return value;
}

// TODO: Parsa usando il reviver
const prestitoRecuperato = JSON.parse(prestitoJSON, reviverDate);

// Test: decommenta per verificare
console.log("\nPrestito recuperato:");
console.log(prestitoRecuperato);
console.log("dataPrestito Ã¨ una Date?", prestitoRecuperato.dataPrestito instanceof Date);
console.log("Data prestito:", prestitoRecuperato.dataPrestito.toLocaleDateString('it-IT'));


// ============================================================================
// PARTE 4: Clonazione Profonda e Confronto (10 minuti)
// ============================================================================

console.log("\n--- PARTE 4: Clonazione e Confronto ---\n");

/**
 * ESERCIZIO 4.1
 * Dato questo oggetto nidificato, crea una copia profonda (deep clone)
 * usando JSON.stringify() e JSON.parse().
 * 
 * Poi modifica una proprietÃ  nidificata nella copia e verifica
 * che l'originale NON sia stato modificato.
 */

const bibliotecaOriginale = {
  nome: "Biblioteca Comunale",
  indirizzo: {
    via: "Via Roma 10",
    cittÃ : "Milano",
    cap: "20100"
  },
  libri: [
    { titolo: "Libro A", disponibile: true },
    { titolo: "Libro B", disponibile: false }
  ]
};

// SCRIVI IL TUO CODICE QUI
const bibliotecaCopia = JSON.parse(JSON.stringify(bibliotecaOriginale));
bibliotecaCopia.indirizzo.cittÃ  = "Roma";
bibliotecaCopia.libri[0].disponibile = false;

// Test: decommenta per verificare
console.log("CittÃ  originale:", bibliotecaOriginale.indirizzo.cittÃ );
console.log("CittÃ  copia:", bibliotecaCopia.indirizzo.cittÃ );
console.log("Primo libro originale disponibile?", bibliotecaOriginale.libri[0].disponibile);
console.log("Primo libro copia disponibile?", bibliotecaCopia.libri[0].disponibile);


/**
 * ESERCIZIO 4.2
 * Scrivi una funzione 'oggettiUguali' che:
 * - Accetta due oggetti come parametri
 * - Restituisce true se hanno lo stesso contenuto, false altrimenti
 * - Usa JSON.stringify() per confrontarli
 * 
 * ATTENZIONE: questo metodo ha limitazioni (ordine delle proprietÃ )
 */

// SCRIVI IL TUO CODICE QUI
function oggettiUguali(obj1, obj2) {
  if(JSON.stringify(obj1) === JSON.stringify(obj2)){return true;}
  else{return false;}
}

// Test con oggetti identici
const libro1 = { titolo: "Test", autore: "Autore" };
const libro2 = { titolo: "Test", autore: "Autore" };
const libro3 = { autore: "Autore", titolo: "Test" }; // ProprietÃ  in ordine diverso
const libro4 = { titolo: "Test", autore: "Altro" };

// Test: decommenta per verificare
console.log("\nConfronto oggetti:");
console.log("libro1 === libro2:", oggettiUguali(libro1, libro2)); // true
console.log("libro1 === libro3:", oggettiUguali(libro1, libro3)); // Potrebbe essere false!
console.log("libro1 === libro4:", oggettiUguali(libro1, libro4)); // false


// ============================================================================
// PARTE 5: Simulazione localStorage (15 minuti)
// ============================================================================

console.log("\n--- PARTE 5: Simulazione localStorage ---\n");

/**
 * ESERCIZIO 5.1
 * Crea un oggetto 'storage' che simula localStorage con:
 * - Una proprietÃ  privata 'dati' (oggetto vuoto)
 * - Metodo setItem(chiave, valore): salva valore come stringa
 * - Metodo getItem(chiave): recupera e restituisce la stringa
 * - Metodo removeItem(chiave): rimuove l'elemento
 * - Metodo clear(): cancella tutto
 * - Metodo length: restituisce il numero di elementi
 * 
 * NOTA: localStorage memorizza solo stringhe!
 */

// SCRIVI IL TUO CODICE QUI
const storage = (function() {
  const dati = {};
  return {
    setItem: function(chiave, valore) {
      dati[chiave] = String(valore);
    },
    
    getItem: function(chiave) {
      return dati.hasOwnProperty(chiave) ? dati[chiave]: null;
      return null;
    },
    
    removeItem: function(chiave) {
      delete dati[chiave];
    },
    
    clear: function() {
      for(let i=0; i<dati.length; i++){
        delete dati[i];
      }
    },
    
    get length() {
      return dati.length;
    }
  };
})();

// Test: decommenta per verificare
storage.setItem("test", "valore");
console.log("Recuperato:", storage.getItem("test"));
console.log("Lunghezza:", storage.length);


/**
 * ESERCIZIO 5.2
 * Usa lo storage simulato per salvare e recuperare oggetti biblioteca.
 * 
 * 1. Crea un array di almeno 2 libri
 * 2. Convertilo in JSON e salvalo nello storage con chiave "biblioteca"
 * 3. Recupera la stringa dallo storage
 * 4. Convertila di nuovo in oggetto
 * 5. Stampa i titoli dei libri recuperati
 */

// SCRIVI IL TUO CODICE QUI
const mieiBibliLibri = [
  {titolo: "Libro X" , autore: "Autore X"},
  {titolo: "Libro Y" , autore: "Autore Y"}
];
storage.setItem("biblioteca", JSON.stringify(mieiBibliLibri));
const bibliotecaRecuperata = JSON.parse(storage.getItem("biblioteca"));

// Test: decommenta per verificare
console.log("\nLibri recuperati dallo storage:");
bibliotecaRecuperata.forEach(libro => {
  console.log("-", libro.titolo);
});


/**
 * ESERCIZIO 5.3
 * Crea funzioni helper per semplificare il lavoro con localStorage:
 * 
 * - salvaOggetto(chiave, oggetto): serializza e salva
 * - recuperaOggetto(chiave): recupera e deserializza
 * - aggiungiALista(chiave, elemento): aggiunge elemento ad array esistente
 * 
 * Gestisci errori di parsing con try-catch
 */

// SCRIVI IL TUO CODICE QUI
function salvaOggetto(chiave, oggetto) {
  storage.setItem(chiave, JSON.stringify(oggetto));
}

function recuperaOggetto(chiave) {
  try {
    const valore = storage.getItem(chiave);
    return valore ? JSON.parse(valore) : null;
  } catch (errore) {
    console.error("Errore nel recupero:", errore.message);
    return null;
  }
}

function aggiungiALista(chiave, elemento) {
  const lista = recuperaOggetto(chiave) || [];
  lista.push(elemento);
  salvaOggetto(chiave, lista);
}

// Test: decommenta per verificare
storage.clear();
salvaOggetto("utente", { nome: "Mario", etÃ : 30 });
const utenteSalvato = recuperaOggetto("utente");
console.log("\nUtente recuperato:", utenteSalvato);

aggiungiALista("preferiti", "Il Signore degli Anelli");
aggiungiALista("preferiti", "1984");
const preferiti = recuperaOggetto("preferiti");
console.log("Preferiti:", preferiti);


// ============================================================================
// PARTE 6: Progetto Completo - Sistema di Backup Biblioteca (BONUS)
// ============================================================================

console.log("\n--- PARTE 6: Progetto Completo ---\n");

/**
 * ESERCIZIO 6.1 - PROGETTO FINALE
 * 
 * Crea un sistema completo di gestione biblioteca con backup JSON:
 * 
 * Classe BibliotecaPersistente:
 * - ProprietÃ : libri (array), chiaveStorage
 * - Metodi:
 *   - aggiungiLibro(libro): aggiunge libro e salva
 *   - rimuoviLibro(titolo): rimuove libro e salva
 *   - cercaLibro(titolo): cerca libro per titolo
 *   - salva(): salva biblioteca in storage
 *   - carica(): carica biblioteca da storage
 *   - esportaJSON(): restituisce JSON formattato
 *   - importaJSON(jsonString): importa da JSON
 *   - getStatistiche(): restituisce statistiche (totale libri, autori unici, ecc.)
 */

// SCRIVI IL TUO CODICE QUI
class BibliotecaPersistente {
  constructor(chiaveStorage = "biblioteca") {
    this.chiaveStorage = chiaveStorage;
    this.libri = [];
    this.carica();
  }
  
  aggiungiLibro(libro) {
    this.libri.push(libro);
    this.salva();
  }
  
  rimuoviLibro(titolo) {
    this.libri = this.libri.filter(l => l.titolo.toLowerCase() !== titolo.toLowerCase());
    this.salva;
  }
  
  cercaLibro(titolo) {
    return this.libri.find(l => l.titolo.toLowerCase() === titolo.toLowerCase());
  }
  
  salva() {
    storage.setItem(this.chiaveStorage, JSON.stringify(this.libri));
  }
  
  carica() {
    try{
      const dati = storage.getItem(this.chiaveStorage);
      if(dati){this.libri = JSON.parse(dati);}
    }
    catch(errore){
      console.error("ERRORE", errore.message);
      this.libri = [];
    }
  }
  
  esportaJSON() {
    return JSON.stringify(this.libri, null, 2);
  }
  
  importaJSON(jsonString) {
    try {
      this.libri = JSON.parse(jsonString);
      this.salva();
    }
    catch (errore) {
      console.error("Errore import:", errore.message);
    }
  }
  
  getStatistiche() {
    const autori = new Set(this.libri.map(l => l.autore));
    const generi = new Set(this.libri.map(l => l.genere));
    const totalePagine = this.libri.reduce((tot, l) => tot + (l.pagine || 0), 0);
    return {
      totaleLibri: this.libri.length,
      autoriUnici: autori.size,
      totalePagine: totalePagine,
      generiUnici: generi.size
    };
  }
}

// Test: decommenta per verificare
storage.clear();
const miabiblioteca = new BibliotecaPersistente();
 
miabiblioteca.aggiungiLibro({
   titolo: "Il Signore degli Anelli",
   autore: "J.R.R. Tolkien",
   anno: 1954,
   genere: "Fantasy",
   pagine: 1178
});
 
miabiblioteca.aggiungiLibro({
   titolo: "1984",
   autore: "George Orwell",
   anno: 1949,
   genere: "Distopia",
   pagine: 328
});
 
console.log("Statistiche:", miabiblioteca.getStatistiche());
console.log("\nEsporta JSON:");
console.log(miabiblioteca.esportaJSON());
 
// // Simula riavvio applicazione
const bibliotecaDoporiavvio = new BibliotecaPersistente();
console.log("\nLibri dopo riavvio:", bibliotecaDoporiavvio.libri.length);


console.log("\n=== FINE ESERCITAZIONE 4 ===");
console.log("Ottimo lavoro! Ora sai come lavorare con JSON in JavaScript.");
console.log("Queste competenze sono fondamentali per comunicare con API e salvare dati.\n");
