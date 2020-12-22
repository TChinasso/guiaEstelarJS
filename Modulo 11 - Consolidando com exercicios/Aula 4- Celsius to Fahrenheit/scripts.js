/* ### Celsius em fahrenheit
    Crie uma funcao que receba uma string em celsius ou fahrenheit e faca
    a transformacao de uma unidade para outra

    C = (F - 32) *5/9

    F = C * 9/5 + 32
*/


function unityChange(temperature) {
    const celsiusExist = temperature.toLowerCase().includes('c')
    const fahrenheitExist = temperature.toLowerCase().includes('f')
    let conversion
    if(celsiusExist){
        let arr = temperature.toLowerCase().split('c')
        conversion = (Number(arr[0]) * 9 / 5 + 32) + "°F"
    } else if(fahrenheitExist) {
        let arr = temperature.toLowerCase().split('f')
        conversion = ((Number(arr[0]) - 32) * 5 / 9) + "°C"
    } else {
        throw new Error('Grau nao identificado')
    }
    return conversion
}

try{
    console.log(unityChange('50f'))
    console.log(unityChange('10C'))
    console.log(unityChange('10z'))
} catch(error) {
    console.log(error)
    alert(error.message)
}

