const idade = 25;
const temCarteira = false;
if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir.");
} else {
    console.log("Não pode dirigir.");
}

const dia = "sabado";
if (dia === "sabado" || dia === "domingo") {
    console.log("É fim de semana!");
} else {
    console.log("É dia de semana.");
}

const usuarioAtivo = false;
if (!usuarioAtivo) {
    console.log("Faça login para continuar.");
} else {
    console.log("Bem-vindo de volta!");
}