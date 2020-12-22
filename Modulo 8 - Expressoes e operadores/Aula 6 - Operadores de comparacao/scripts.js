// Operadores de comparacao

// Ira comparar valores e retornanr um boolean como resposta

let one = 1
let two = 2

// ==   Igual
console.log(one == 1) //true
console.log(one == "1", "igual (==)") //true
// !=   Diferente
console.log(one != two) //true
console.log(one != 1) //false
console.log(one != "1", "Diferente (!=)") //false
// ===  Estritamente igual
console.log(one === "1") //false
console.log(one === one) //true
console.log(one === Number("1"), "Estritamente igual (===)") //true
// !==  Estritamente diferente
console.log(two !== one)  //true
console.log(two !== two, "estritamente diferente (!==)") //false
// >    Maior que
console.log(one > two) //false
console.log(two > one, "Maior que (>)")  //true
// <    Menor que
console.log(one < two) // true
console.log(one < one, "Menor que (<)") //false
// >=   Maior ou igual
console.log(one >= 1) // true
console.log(two >= 1, "Maior ou igual (>=)") // true
// <=   Menor ou igual
console.log(one <= 1) // true
console.log(two <= 1, "Maior ou igual (>=)") // false