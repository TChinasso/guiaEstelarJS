// 1. Declare uma variavel de nome weight

let weight;

// 2. Que tipo de dado e a variavel acima?

console.log(typeof weight);

/* 
    3. Declare uma variavel e atriibua valores para cada um dos dados
        * name: string
        * age: Number
        * stars: Number
        * isSubscribed: boolean

*/

let name = "thiago";
let age = 23;
let stars = 5.5;
let isSubscribed = true

/* 
    4. A variavel student abaixo e de que tipo de dados
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3
    4.2 mostre no console a mensagem
        <name> de idade <age> pesa <weight>
*/

let student = {
    name: 'thiago',
    weight: 78.5,
    age: 23,
    stars: 5.5,
    isSubscribed: true
};


console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`);

/*
    5. declare uma variavel do tipo Array, de nnome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = [];

// 6. reatribua valor para variavel acima, colocando dentro dela o objeto student da questao 4

students = [
    student,
]

// 7. Coloque no console log o valor da posicao zero do Array acima'

console.log(students[0])

// 8. Coloque um novo objeto student e coloque na posicao 1 do array students
const studentFelipe = {
    name: 'Felipe',
    age: 23,
    weight: 80.2,
    isSubscribed: false

}

students[1] = studentFelipe;
console.log(students);

/*
    9. Sem rodar o codigo, responda qual o resultado do codigo abaixo e por que

    console.log(a)
    var a = 1

    resposta Undefined
    isso se deve pelo Hoisting ou Elevacao
    o script sabe que existe a variavel A e a cria como indefinida
    
    var a
    console.log(a)
    var a = 1
*/

console.log(a)
var a = 1