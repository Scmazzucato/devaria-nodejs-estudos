const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log('Número informado inválido');
    }
    return resultado
}

const validarOperador = (operador) =>{
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('Operador informado inválido');
    }
}

readLine.question('Favor informar um número:', (numero1) =>{
    const numeroValidado = validarNumeroInformado(numero1);

    if(numeroValidado){
        readLine.question('Favor informar outro número:', (numero2) =>{
            const numeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2){
                readLine.question('Favor informar o operador', (operador) =>{
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+': console.log(`operação de adição = ${numeroValidado} + ${numeroValidado2} = ${numeroValidado + numeroValidado2}`);
                            break;
                            case '-': console.log(`operação de subtração = ${numeroValidado} - ${numeroValidado2} = ${numeroValidado - numeroValidado2}`);
                            break;
                            case '*': console.log(`operação de multiplicação = ${numeroValidado} + ${numeroValidado2} = ${numeroValidado * numeroValidado2}`);
                            break;
                            case '/': console.log(`operação de divisão = ${numeroValidado} + ${numeroValidado2} = ${numeroValidado / numeroValidado2}`);
                            break;
                            case '%': console.log(`operação de porcentagem = ${numeroValidado} + ${numeroValidado2} = ${numeroValidado % numeroValidado2}`);
                            break;
                        }
                    }
                })
            }
        })
    }    
})