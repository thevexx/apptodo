const express = require('express');
const port = 3000;
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

const auth = require('./Server/Routes/auth');
app.use('/auth', auth);

const todo = require('./Server/Routes/todo');
app.use('/todo',todo);

app.listen(port, err => {
    console.log(`hani namsa3 fik 3al ${port}`)
})

// 192.168.0.2