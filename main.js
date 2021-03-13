// tady je místo pro náš program

// document.querySelector("#vysledek").innerHTML = secti(4, 5);


/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */

// function upozorni() {
//   alert("Gratulace, právě jsi spustila tuto funkci!");
// }

/* Vytvořte tlačítko, při jehož stisknutí se změní barva <strong>Čtvereček</strong> na zelenou.*/

document.querySelector('.ctverecek').style.backgroundColor = 'green';

/* Upravte kód tak, aby se výsledek funkce <em>secti()</em> zobrazil v prvku s ID <strong>vysledek</strong> až po stiknutí nově přidaného tlačítka "Zobraz výsledek". */

function zobraz() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

/* Uprav funkci <em>upozorni()</em> tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu <strong>Čtvereček</strong>. */

function upozorni() {
  console.log('Gratulace, právě jsi spustila tuto funkci!');
  document.querySelector('.ctverecek').textContent = 'Gratulace, právě jsi spustila tuto funkci!';
}

