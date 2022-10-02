import express from "express";
import cors from "cors";
import {routerIngles , routerEstadistica ,routerArquitectura,routerProgramacion,routerMetodologia,routerInicio } from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/Ingles' , routerIngles);
app.use('/Estadistica' , routerEstadistica);
app.use('/Arquitectura' , routerArquitectura);
app.use('/Programacion' , routerProgramacion);
app.use('/Metodologia' , routerMetodologia);
app.use('/Login' , routerInicio);

app.get('/', (req, res)=>{
    res.send("hola")
})
 
app.listen(7890, ()=>{
    console.log('Server running at http://localhost:7890/');
})
