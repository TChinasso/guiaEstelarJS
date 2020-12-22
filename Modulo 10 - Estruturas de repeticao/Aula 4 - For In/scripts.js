//for in cria um loop em cima das propriedades de um objeto

let person = {
    name: 'thiago',
    age: 23,
    weight: 78
}
for(let property in person) {
    console.log(property) //pega o elemento
    console.log(person[property]) // pega o valor

}

