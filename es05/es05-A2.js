const libro = {
  titolo: "la fattoria degli animali",
  autore: "george orwell",
  annoDiPubblicazione: 1945,
  genere: "romanzo allegorico e satirico",
  numeroDiPagina: 144,
};

for (let key in libro) {
  console.log(${key} -> ${libro[key]});
}
