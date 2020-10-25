const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Gerson Online agora vai'));

app.listen(3000);