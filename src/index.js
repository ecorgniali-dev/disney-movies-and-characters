const express = require('express');
const app = express();
const { PORT } = require('./config/config.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
