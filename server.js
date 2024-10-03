// APP:
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json(), cors({
    origin: "*"
}));

app.use(morgan('tiny'));

app.get('/1', async (req, res) => {
    res.send({
        Testando : "Sucesso!"
    })
})


// ROUTE:
import { Router } from "express";

const route = Router();

route.get('/', async (req, res) => {
    res.send({
        Teste : "Sucesso!"
    })
})

//SERVER:
import http from "http";

const server = http.createServer(app);

server.listen(8000, ( ) => { });