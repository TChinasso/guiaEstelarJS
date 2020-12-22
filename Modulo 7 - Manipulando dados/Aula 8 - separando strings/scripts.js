// Manipulando Strings e Arrays

// separe um texto que contem espacos, em um novo array onde cada texto e uma posicao do array, depois disso, transforme o array em um texto e onde eram espacos, coloque _


let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // o argumento recebe qual o caractere vai ser o divisor para colocar em um array
console.log(myArray)
let phraseWithUnderscore = myArray.join("_"); // junta todos os elementos do array e o argumento vira o separador
console.log(phraseWithUnderscore.toLowerCase())