// Operador Condicional ( Ternario)

// Dependendo da condicao, nos recebemos valores diferentes

// Condicao entao valor 1 se nao valor 2
// condition ? value1 : value2

//Exemplos

//cafe da manha top
let pao = true
let queijo = false

const niceBreakFast = (pao || queijo ? "TOP" : "Nao TOP")
console.log(niceBreakFast)

// maior de 18

let age = 18
const verifyAge = (age >=18 ? "Maior de idade" : "Menor de idade")
console.log(verifyAge)