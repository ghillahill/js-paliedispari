//Palindroma

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
