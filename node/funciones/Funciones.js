import child_process from 'child_process'
import fs from 'fs'

export const lecturaDeCarpeta = (path) => {
    try{
        const dir = fs.readdirSync(`/home/amaro/Desktop/Proyectos/PaginaDeGestionPersonal/archivos/${path}`);
        const aux = dir.map((n)=> n.split('.'));
        return aux;
    }catch(e){
        return ["error: " + e];
    }
} 

export const remove = (nombre) => {
    try{
        fs.unlinkSync(`/home/amaro/Desktop/Proyectos/PaginaDeGestionPersonal/archivos/${nombre}`);
        console.log("borrado")
    }catch(e){
        console.log(e)
    }
} 

export const abrir = (nombre) => {
    try{
        const open = child_process.spawn('open',[`/home/amaro/Desktop/Proyectos/PaginaDeGestionPersonal/archivos/${nombre}`])
        open.stdout.on('data', (data) =>{
            console.log(`${data}`);
        })
        open.stderr.on('data', (data) =>{
            console.log(data);
        })
        open.on('data', (data) =>{
            console.log(data);
        })
    }catch(e){
        console.log(e)
    }
} 