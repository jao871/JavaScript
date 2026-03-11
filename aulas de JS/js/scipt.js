
let body = document.querySelector('body.corpo')
console.log(body)

let titulo = document.querySelector('.titulo')

titulo.textContent = 'TABELA DE NOTAS'

document.addEventListener("DOMContentLoaded", () => {

    const linhas = document.querySelectorAll("tbody tr");

    linhas.forEach(linha => {
        const colunas = linha.querySelectorAll("td");

        const nota1 = parseFloat(colunas[1].textContent);
        const nota2 = parseFloat(colunas[2].textContent);
        const nota3 = parseFloat(colunas[3].textContent);

        const media = (nota1 + nota2 + nota3) / 3;

        colunas[4].textContent = media.toFixed(2);

        if (media >= 7) {
            colunas[5].textContent = "Aprovado";
        } else {
            colunas[5].textContent = "Reprovado";
        }
    });
});