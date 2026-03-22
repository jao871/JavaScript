
export function media(n1, n2, n3) {
    const resultado = n1 + n2 + n3 / 3;
    console.log('A soma das notas é: ' + resultado);
    return resultado;
}
media()

export function maior (num1, num2, num3, num4) {
    const valor = [num1, num2, num3, num4]
    const valorMaior = valor.reduce((maior, atual) => atual > maior ? atual : maior);
    console.log('O maior valor é:', valorMaior);
    return valorMaior;
}
maior();





