const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e se tem habilitação para usar pilotar o kart.');
console.log('Além disso precisamos checar se você está na lista de reserva, no horário correto.');

readLine.question('Qual o ano do seu nascimento? ', ano =>{
    if(ano>2004){
        console.log('Você não tem 18 anos, para acessar o kart!');
    }else{
        readLine.question('Você tem habilitação? (Sim/Não) ', temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação, para pilotar o kart!')
            }else{
                readLine.question('Qual o seu nome?', nome =>{
                    switch(nome){
                        case 'Samuel' :
                            console.log('Seja bem vindo ao kart Samuel');
                            break;
                        case 'Catarina' :
                            console.log('Seja bem vindo ao kart Catarina');
                            break;
                        case 'Geovane' :
                            console.log('Seja bem vindo ao kart Geovane');
                            break;
                        default:
                            console.log('Você não está na lista de presença')
                    }
                })
            }
        })
    }
});