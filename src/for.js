import express from 'express';

export function tabuada(n1) {
    const resultado = []

    for (let i = 1; i <= 10; i++) {
        resultado.push(`${n1} x ${i} = ${n1 * i}`)
    }

    return resultado
}

const router = express.Router();

router.get('/:numero', (req, res) => {
    const numero = req.params.numero
    const resultado = tabuada(numero)

    res.json(resultado)
});

export default router;