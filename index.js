const express = require('express');
const cors = require('cors');
const http = require('http')

const app = express();
app.use(express.json(), cors({ origin: "*" }));

app.get('/', async (req, res) => {

    res.send({
        testando : "Sucesso!"
    })

})

const server = http.createServer(app);
server.listen(8000, ( ) => { })