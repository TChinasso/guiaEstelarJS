// estrutura de repeticao FOR
//break para a execucao
//continue - pula a execucao

for(let i = 0; i <10; i++) {
    console.log(i)
    if(i === 5){
        break;
    }
}


for(let i = 0; i <10; i++) {
    if(i === 3){
        continue;
    }
    console.log(i)
}