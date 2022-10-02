import child_process from 'child_process'
import fs from 'fs'

//linux
let OSName = '/home/amaro/Desktop/Proyectos/PaginaDeGestionPersonal/'

export const lecturaDeCarpeta = (path) => {
    try{
        const dir = fs.readdirSync(`${OSName}archivos/${path}`);
        const aux = dir.map((n)=> n.split('.'));
        return aux;
    }catch(e){
        return ["error: " + e];
    }
} 

export const remove = (nombre) => {
    try{
        console.log(nombre)
        fs.unlinkSync(`${OSName}archivos/${nombre}`);
        console.log("borrado")
    }catch(e){
        console.log(e)
    }
} 

export const abrir = (nombre) => {
    try{
        const open = child_process.spawn('open',[`${OSName}archivos/${nombre}`])
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

export const iniciar = (id) => {
    try{
        fs.writeFile(`${OSName}front-app/.env`
        , 'REACT_APP_ID='+id , err => 
        {if(err) return console.log(err)});
        console.log(id)
    }catch(e){
        console.log(e)
    }
} 
