// APP:
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json(), cors({
    origin: "*"
}));


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