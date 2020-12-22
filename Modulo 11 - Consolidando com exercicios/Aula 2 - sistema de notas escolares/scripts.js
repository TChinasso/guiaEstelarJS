/* ### Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema numerico para sistema
    de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * Menor que 60    - F

*/


function calculateScore(score) {
    let final
    const A = score >= 90 && score <= 100
    const B = score >= 80 && score < 90
    const C = score >= 70 && score < 80
    const D = score >= 60 && score < 70
    const F = score < 60 && score >=0
    
    if(A){
        final = "Nota A"
    } else if(B) {
        final = "Nota B"
    } else if(C) {
        final = "Nota C"
    } else if(D) {
        final = "Nota D"
    } else if(F) {
        final = "Nota F"
    } else {
        final = "Nota Invalida"
    }


    return final
}

console.log(calculateScore(101))