const book = {
  titolo: "La Commedia",
  autore: "Dante Alighieri",
  annoPubblicazione: 1321,
  genere: "Poema allegorico",
  numeroPagine: 798
};

for (let key in book) {
  console.log(`${key} -> ${book[key]}`);
}
