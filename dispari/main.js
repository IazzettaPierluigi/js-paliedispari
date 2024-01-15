// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//FUNZIONI A FONDO PAGINA

// Chiedo all'utente di scegliere pari o dispari e inserire un numero da 1 a 5
  let sceltaUtente = prompt("Scegli pari o dispari:");
  let numeroUtente = parseInt(prompt("Dimmi un numero da 1 a 5:"));
  
  
  // Genero un numero casuale per il computer
  let numeroComputer = numeroRandom();
  
  // Sommo i due numeri
  let somma = numeroUtente + numeroComputer;
  
  // Verifico se la somma è pari o dispari
  let risultatoGioco;
  if (isPari(somma)) {
      risultatoGioco = "pari";
    } else {
        risultatoGioco = "dispari";
    }
    
    // Dichiarare il vincitore
    if (sceltaUtente === risultatoGioco) {
        console.log(`Hai vinto! La somma (${numeroUtente} + ${numeroComputer}) è ${risultatoGioco}.`);
    } else {
        console.log(`Hai perso. La somma (${numeroUtente} + ${numeroComputer}) è ${risultatoGioco}.`);
    }
    
    







    /////////////FUNZIONI////////////////////////

    // Funzione per numero random da 1 a 5
    function numeroRandom() {
        return Math.floor(Math.random() * 5) + 1;
      }
      
      // Funzione per verificare se un numero è pari
      function isPari(numero) {
        return numero % 2 === 0;
      }