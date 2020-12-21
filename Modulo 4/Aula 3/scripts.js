// var e global e tambem local
//hoisting

console.log('> existe x antes do bloco?', x); // existe mas nao tem valor definido para X

{
    var x = 0;
}

console.log('> existe x depois do bloco?', x)