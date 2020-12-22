// Throw

function sayMyName(name){
    if (name == false) {
        throw new Error("Nome vazio")
    }

}


// Try...Catch
try {
    sayMyName('')
} catch (e) {
    console.log(e)
}



console.log("Depois do erro")

