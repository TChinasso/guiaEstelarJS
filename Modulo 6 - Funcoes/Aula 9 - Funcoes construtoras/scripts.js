/*
    Function() constructor

    * expressao new
    * Cria um novo objeto
    * this keyword
*/



function Person(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.walk = function() {
        return this.name + ' esta andando'
    }
}

const thiago = new Person("Thiago", 23, 78.2)
const felipe = new Person("Felipe", 23, 86.5)

console.log(thiago)
console.log(felipe.walk())

let name = new String("Thiago")
console.log(name)