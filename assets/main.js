//Palindroma

/*
function isPalindrome(word) {
    //Dichiaro una variabile che suddivide una stringa in sottostringhe e le inserisce in un array.
    //con la funzione reverse() inverte gli elementi dell'array
    //con join unisce gli elementi dell'array creando una nuova parola
    var new_word = word.split('').reverse().join('');
    //se la nuova parola al contrario è uguale a quella prima allora stampa è palindroma.
    if (new_word == word) {
        console.log(word + ' è una parola palindroma!')
        return new_word;
    }
    //altrimenti se la nuova parola al contrario non è uguale a quella prima allora stampa non è palindroma.
    else {
        console.log(word + ' non è una parola palindroma!')
        return new_word;
    }
}

//dichiaro una variabile che contiene la mia funzione
var check_word = isPalindrome('cesare');

console.log('La parola scelta al contrario è: ' + check_word);

var check_word = isPalindrome('anna');

console.log('La parola scelta al contrario è: ' + check_word);
*/


//Pari o dispari

function myLittleGame(){
    var info_game = alert('Scegli un numero compreso tra 1 e 5, il computer farà lo stesso! Successivamente decidi se la somma tra i vostri numeri sarà pari o dispari!');
    var my_number = parseInt(prompt('Scegli un numero da 1 a 5'));
    var my_decision = prompt('Decidi se la somma dei due numeri sarà "pari" o "dispari"!');

    var random_number = Math.floor(Math.random() * 5) + 1;
    console.log('Numero scelto dal computer: ' + random_number);

    var sum = my_number + random_number;
    console.log('Somma tra il tuo numero e quello del computer: ' + sum);

    if (sum % 2 == 0 && my_decision == 'pari') {
        console.log('Hai vinto! Hai scelto pari e la somma dei due numeri è pari!');
    }
    else if (sum % 2 != 0 && my_decision == 'dispari') {
        console.log('Hai vinto! Hai scelto dispari e la somma dei due numeri è dispari!');
    }
    else {
        console.log('Hai perso, questa volta ha vinto il computer!');
    }
}


myLittleGame();
