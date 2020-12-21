## let e const
```js
//const e let sao locais e so funcionam no escopo onde foi criada
console.log('> existe y depois do bloco?', y);

{
    let y = 0;
}

console.log('> existe y depois do bloco?', y);
```