const listaDeArgs = process.argv.slice(2);

console.log('-------------- Executando um FOR -------------');
for(let controladorFor = 0; controladorFor < listaDeArgs.length; controladorFor++){
    console.log(`Posição ${controladorFor} valor lido = ${listaDeArgs[controladorFor]}`)
}

console.log('-------------- Executando um WHILE -------------');
let controladorWhile = 0;
while(controladorWhile < listaDeArgs.length){
    console.log(`Posição ${controladorWhile} valor lido = ${listaDeArgs[controladorWhile]}`);
    controladorWhile++;
}

console.log('-------------- Executando um DO WHILE -------------');
let controladorDoWHile = 0;
do{
    console.log(`Posição ${controladorDoWHile} valor lido = ${listaDeArgs[controladorDoWHile]}`);
    controladorDoWHile++;
}while(controladorDoWHile < listaDeArgs.length);

console.log('-------------- Executando um FOR OF -------------');
for(const args of listaDeArgs){
    console.log(`Valor lido = ${args}`);
}