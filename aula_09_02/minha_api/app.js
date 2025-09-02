const express = require('express');
const app = express();

app.get('/' , (req, res) => {
    res.send('Olá! Meu primeiro servidor está funcionando.');
});

app.get('/saude', (req, res) => {
    res.send('Tudo certo por aqui.');
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});