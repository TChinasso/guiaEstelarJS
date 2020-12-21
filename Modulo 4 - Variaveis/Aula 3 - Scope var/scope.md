# Scope

* Escopo determina a visibilidade de alguma variavel no JS
* Block Statement
```js
// vamos iniciar um bloco
{
    // aqui dentro e um bloco e posso colocar qualquer codigo

} // aqui fechamos o bloco
```

 O bloco, tambem criara um novo escopo, chamamos de `block-scoped`


 ## var

```js
// var e global e podera funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco?', x);

{
    var x = 0;
}

console.log('> existe x depois do bloco?', x)
```