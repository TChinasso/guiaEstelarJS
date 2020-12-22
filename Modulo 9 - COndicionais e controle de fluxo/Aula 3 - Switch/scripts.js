// switch


function calculate(number1, operator, number2){
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
    
        default:
            console.log('Nao implementado')
            break;
    }
    return result
}

console.log(calculate(1, '-', 4))