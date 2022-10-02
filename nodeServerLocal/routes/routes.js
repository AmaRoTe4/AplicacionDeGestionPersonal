import express from 'express'
import {lecturaDeCarpeta , remove , abrir , iniciar} from '../function/function.js'
import multer from 'multer'

const Upload = (carpeta) =>{
    const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, `/home/amaro/Desktop/Proyectos/PaginaDeGestionPersonal/archivos/${carpeta}`);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        }),
    upload = multer({storage:storage})
    return upload.single("archivo");
}

export const routerEstadistica = express.Router();
export const routerArquitectura = express.Router();
export const routerProgramacion = express.Router();
export const routerMetodologia = express.Router();
export const routerIngles = express.Router();
export const routerInicio = express.Router();

routerInicio.get('/:id' , (req, res) => {
    try{
        const id = req.params.id;
        iniciar(id);
    }catch(e){
        console.log(e);
    }
})
routerEstadistica.post('/', Upload('Estadistica'),  (req, res) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
    }
})

routerEstadistica.get('/' , (req, res) => {
    try{
        res.json(lecturaDeCarpeta('Estadistica'));
    }catch(e){
        console.log(e);
    }
})

routerEstadistica.get('/:nombre' , (req, res) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Estadistica/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

routerEstadistica.delete('/:nombre' , (req, res) => {
   try{
       const nombre = req.params.nombre;
       remove(`Estadistica/${nombre}`);
   }catch(e){
       console.log(e);
   }
})

routerArquitectura.post('/', Upload('Arquitectura'),  (req, res) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
        }
})

routerArquitectura.get('/' , (req, res) => {
    try{
        res.json(lecturaDeCarpeta('Arquitectura'));
    }catch(e){
        console.log(e);
    }
})

routerArquitectura.get('/:nombre' , (req, res) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Arquitectura/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

routerArquitectura.delete('/:nombre' , (req, res) => {
    try{
        const nombre = req.params.nombre;
        remove(`Arquitectura/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

routerMetodologia.post('/', Upload('Metodologia'),  (req, res) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
        }
})

routerMetodologia.get('/' , (req, res) => {
    try{
        res.json(lecturaDeCarpeta('Metodologia'));
    }catch(e){
        console.log(e);
    }
})

routerMetodologia.get('/:nombre' , (req, res) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Metodologia/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

routerMetodologia.delete('/:nombre' , (req, res) => {
    try{
        const nombre = req.params.nombre;
        remove(`Metodologia/${nombre}`);
    }catch(e){
        console.log(e);
    }
 })

routerProgramacion.post('/', Upload('Programacion'),  (req, res) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
        }
})

routerProgramacion.get('/' , (req, res) => {
    try{
        res.json(lecturaDeCarpeta('Programacion'));
    }catch(e){
        console.log(e);
    }
})

routerProgramacion.get('/:nombre' , (req, res) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Programacion/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

routerProgramacion.delete('/:nombre' , (req, res) => {
     try{
         const nombre = req.params.nombre;
         remove(`Programacion/${nombre}`);
        }catch(e){
        console.log(e);
    }
})

routerIngles.post('/', Upload('Ingles'),  (req, res) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
        }
})

routerIngles.get('/' , (req, res) => {
    try{
        res.json(lecturaDeCarpeta('Ingles'));
    }catch(e){
        console.log(e);
    }
})

routerIngles.delete('/:nombre' , (req, res) => {
    try{
        const nombre = req.params.nombre;
        remove(`Ingles/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

routerIngles.get('/:nombre' , (req, res) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Ingles/${nombre}`);
    }catch(e){
        console.log(e);
    }
})
