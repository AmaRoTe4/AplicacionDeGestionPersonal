import express from "express";
import cors from "cors";
import { PORT } from "./config/config.js"
import {router1 , router2} from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/Notas' , router1);
app.use('/Fechas' , router2);

app.get('/', (req, res)=>{
    res.send("running")
})
 
app.listen(PORT)
