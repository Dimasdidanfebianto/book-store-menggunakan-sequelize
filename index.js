const express = require('express')

const app = express();
const port = 3000;
const router = require('./routes/index')

app.use(router)

app.get('/', (req, res) => {
    res.send('Hello World! wkwkwkwk')
})

// GET, POST, PUT, PATCH, DELETE


app.get('/about', (req, res) => {
    res.send('Ini adalah response dari about')
})



app.listen(port, () => {
    console.log (`Example app listening at http://localhost:${port}`)
})