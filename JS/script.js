// CONSEGNA

/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

// PASSAGGI DA EFFETTUARE
/*
1. Chiedo all'utente il suo nome;
2. Chiedo il suo cognome;
3. Chiedo il suo colore preferito;
4. Salvo in un const i dati ricevuti;
5. Creo un const concatenando le stringhe;
6. Collego il concatenamento all'HTML;
7. Stampo sulla pagina il const concatenato;
*/

const nome = prompt("Qual è il tuo nome?");

const cognome = prompt("Qual è il tuo cognome?");

const colore = prompt("Qual è il tuo colore preferito?");

console.log(nome, cognome, colore);

// CONST che addiziona i dati ricevuti
const psw = nome + cognome + colore;

console.log(psw);

// CONST da collegare a HTML
const outputStr = `
  Ciao! La tua password generata è ${psw}23.
`
console.log(outputStr);

// COLLEGAMENTO a HTML 
document.getElementById("output").innerHTML = outputStr;