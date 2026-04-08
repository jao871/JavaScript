import express from 'express';
import exibirUsuario from './variavel.js';
import { tabuada } from './for.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/usuario', exibirUsuario);

app.get('/tabuada/:numero', (req, res) => {
    const numero = req.params.numero
    const resultado = tabuada(numero)

    res.json(resultado)
});

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});