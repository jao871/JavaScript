// exercicio.1 //
const alunos = [
    { nome: 'Lucas', nota: 8 },
    { nome: 'Leon', nota: 6 },
    { nome: 'Biro', nota: 9 }
]
alunos.forEach(alunos => {
    console.log(alunos.nome + ' tem nota ' + alunos.nota);
});

// exercicio.2 //
function tabuada(n1) {
    for (let i = 0; i <= 10; i++) {
        const resultado = n1 * i;
        console.log(i + ' X ' + n1 +' = '+ resultado )
    }
}
const tabuada5 = tabuada(5);
