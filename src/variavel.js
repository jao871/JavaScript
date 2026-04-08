import express from 'express';
const router = express.Router();

const usuario = {
    nome: 'João',
    idade: 17,
    email: 'jvt@gmail.com'
}

export function exibirUsuario(req, res) {
    res.json(usuario);
}

router.get('/', exibirUsuario);

export default router;