// exercicio.1 //
function somar(a = 10, b = 20) {
    const resultado = a + b;
    console.log(`O resultado da soma é: ` + resultado);
    return resultado;
}
somar();

// exercicio.2 //
function mutiplicar(n1,n2) {
    return n1 * n2;
}
const resultadoMultiplicado = mutiplicar(20,2);
console.log ('o resultado da multiplicação é: ' + resultadoMultiplicado);

// exercicio.3 //
function dividir( n3, n4) {
    return n3/ n4;
}

const resultdoDivisao = dividir(10,5);
console.log('O resultado da divisão é: ' + resultdoDivisao);

// exercicio.4 //
function subtrair(n5,n6) {
    return n5 - n6;
}

const resultadoSubtracao = subtrair(10,5);
console.log('O resultado da subtração é: ' + resultadoSubtracao);

// exercicio.5 //
function resto (n7, n8) {
    return n7 % n8;
}
const resultadoResto = resto(10,3);
console.log('O resultado do resto é: ' + resultadoResto);

// exercicio.6 //
function potencia (n9, n10) {
    return n9 ** n10;
}
const resultadoPotencia = potencia(5,4);
console.log('O resultado da potência é: ' + resultadoPotencia);


