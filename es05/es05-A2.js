const libro = {
  titolo: "l'inventore di sogni",
  autore: "Einaudi Scuola",
  annoDiPubblicazione: 1997,
  genere: "romanzo allegorico e satirico",
  numeroDiPagina: 128,
};

for (let key in libro) {
  console.log(${key} -> ${libro[key]});
}
