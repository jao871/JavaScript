// exercicio.1 //
export function verficarIdade(idade) {
    if (idade >= 18) {
        console.log("você é maior de idade");
    } else {
        console.log("você é menor de idade")
    }  
}
console.log(verficarIdade(18));
console.log(verficarIdade(5));


const nome = "João";
if (nome === "João") {
    console.log("Olá, João!");
}


function reprovado (media) {
    if (media >= 7) {
        console.log("Aprovado");
    } else if (media >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
    return media;
}
reprovado()

export function par(numero) {
    const ImparPar = (numero % 2 === 0) ? 'Par' : 'impar';
    console.log('O número é:' + ImparPar);
    return ImparPar;
}

// exercicio.5 //
const dia = 6;
switch (dia) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Terça-Feira")
        break;
    case 3:
        console.log("Quarta-Feira")
        break;
    case 4:
        console.log("Quinta-Feira")
        break;
    case 5:
        console.log("Sexta-Feira")
        break;  
    case 6:
        console.log("Sábado")
        break;
    case 7:
        console.log("Segunda-Feira")
        break;
    default:
        console.log("Dia inválido")
}
