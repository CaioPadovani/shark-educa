const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use o body-parser para processar dados JSON nas solicitações POST e PUT
app.use(bodyParser.json());

app.get('/home', (req, res) => {
    res.send('Selecione via caminho qual informacao. ');
});

app.get('/home/abner', (req, res) => {
    res.send('Testa aquii e a tela de login com os dados da abner ');
});

app.get('/home/caio', (req, res) => {
    res.send('Testa aquii e a tela de login com os dados da caio');
});

app.get('/home/bruna', (req, res) => {
    res.send('Testa aquii e a tela de login com os dados da bruna ');
});

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
  });