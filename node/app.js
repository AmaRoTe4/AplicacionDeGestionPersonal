import express from "express";
import cors from "cors";
import {router1 , router2 , routerIngles , routerEstadistica ,routerArquitectura,routerProgramacion,routerMetodologia } from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/Notas' , router1);
app.use('/Fechas' , router2);
app.use('/Ingles' , routerIngles);
app.use('/Estadistica' , routerEstadistica);
app.use('/Arquitectura' , routerArquitectura);
app.use('/Programacion' , routerProgramacion);
app.use('/Metodologia' , routerMetodologia);

app.get('/', (req, res)=>{
    res.send("hola")
})
 
app.listen(7890, ()=>{
    console.log('Server running at http://localhost:7890/');
})
