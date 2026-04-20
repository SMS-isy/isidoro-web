#!/usr/bin/env node

const args = process.argv.slice(2);

// Controllo input
if (args.length !== 3) {
  console.log("Uso: node calc.js <numero1> <operazione> <numero2>");
  console.log("Operazioni supportate: add, sub, mul, div");
  process.exit(1);
}

let [num1, operation, num2] = args;

// Conversione in numeri
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Validazione numeri
if (isNaN(num1) || isNaN(num2)) {
  console.error("Errore: inserisci numeri validi.");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    if (num2 === 0) {
      console.error("Errore: divisione per zero.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.error("Operazione non valida. Usa: add, sub, mul, div");
    process.exit(1);
}

console.log(`Risultato: ${result}`);
