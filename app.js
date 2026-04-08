import express from 'express';
import {exibirUsuario} from './src/variavel.js'
import {soma} from './src/soma.js';
import {multiplicacao} from './src/multiplicacao.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/usuario', exibirUsuario);

app.get('/multiplicacao/:n1/:n2', (req, res) => {
    let {n1, n2} = req.params;
    let resultadoMultiplicacao = multiplicacao(parseInt(n1), parseInt(n2));

    let resposta = {
        resultado: resultadoMultiplicacao
    }
    res.json(resposta);
});

app.get('/soma/:n1/:n2', (req, res) => {
    let {n1, n2} = req.params;
    let somado = soma(parseInt(n1), parseInt(n2));

    let resposta = {
        resultado: somado
    }
    res.json(resposta);
});

app.get('/', (req, res) => {
    res.send('Hello word!');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});