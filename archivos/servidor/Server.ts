const fs = require('fs');
const cors = require('cors');
const json = require('express')
const child_process = require('child_process');
const app = require('express')()
const multer = require('multer')

export const Upload = (carpeta:string):void =>{
    const storage = multer.diskStorage({
            destination: (req:any, file:any, cb:any) => {
                cb(null, `../${carpeta}`);
            },
            filename: (req:any, file:any, cb:any) => {
                cb(null, file.originalname);
            },
        }),
    upload = multer({storage:storage})
    return upload.single("archivo");
}

app.use(cors());
app.use(json.json());
app.use(json.urlencoded({extended:false}));

app.post('/Estadistica', Upload('Estadistica'),  (req:any, res:any) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
        }
})

app.post('/Metodologia', Upload('Metodologia'),  (req:any, res:any) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
        }
})

app.post('/Arquitectura', Upload('Arquitectura'),  (req:any, res:any) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
        }
})

app.post('/Programacion', Upload('Programacion'),  (req:any, res:any) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
        }
})

app.post('/Ingles', Upload('Ingles'),  (req:any, res:any) => {
    try{
        res.json('Subido');
    }catch(e){
        console.log(e);
        }
})

//-----------------------------------------------------------------
app.get('/Estadistica' , (req:any, res:any) => {
    try{
        res.json(lecturaDeCarpeta('Estadistica'));
    }catch(e){
        console.log(e);
    }
})

app.get('/Arquitectura' , (req:any, res:any) => {
    try{
        res.json(lecturaDeCarpeta('Arquitectura'));
    }catch(e){
        console.log(e);
    }
})

app.get('/Metodologia' , (req:any, res:any) => {
    try{
        res.json(lecturaDeCarpeta('Metodologia'));
    }catch(e){
        console.log(e);
    }
})

app.get('/Programacion' , (req:any, res:any) => {
    try{
        res.json(lecturaDeCarpeta('Programacion'));
    }catch(e){
        console.log(e);
    }
})

app.get('/Ingles' , (req:any, res:any) => {
    try{
        res.json(lecturaDeCarpeta('Ingles'));
    }catch(e){
        console.log(e);
    }
})

//--------------------------------------------------------------------
app.get('/Estadistica/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Estadistica/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

app.get('/Arquitectura/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Arquitectura/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

app.get('/Metodologia/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Metodologia/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

app.get('/Programacion/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Programacion/${nombre}`);
    }catch(e){
        console.log(e);
    }
})

app.get('/Ingles/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        abrir(`Ingles/${nombre}`);
    }catch(e){
        console.log(e);
    }
})
//------------------------------------------------------------
app.delete('/Estadistica/:nombre' , (req:any, res:any) => {
   try{
       const nombre = req.params.nombre;
       remove(`Estadistica/${nombre}`);
   }catch(e){
       console.log(e);
   }
})

app.delete('/Arquitectura/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        remove(`Arquitectura/${nombre}`);
    }catch(e){
        console.log(e);
    }
 })

 app.delete('/Metodologia/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        remove(`Metodologia/${nombre}`);
    }catch(e){
        console.log(e);
    }
 })

 app.delete('/Programacion/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        remove(`Programacion/${nombre}`);
    }catch(e){
        console.log(e);
    }
 })

 app.delete('/Ingles/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        remove(`Ingles/${nombre}`);
    }catch(e){
        console.log(e);
    }
 })

//funciones de obtension de carpetas
const lecturaDeCarpeta = (path:string):Array<string[] | string> => {
    try{
        const dir:Array<string> = fs.readdirSync(`../${path}`);
        const aux:Array<string[] | string> = dir.map((n)=> n.split('.'));
        return aux;
    }catch(e){
        return ["error: " + e];
    }
} 

const remove = (nombre:string):void => {
    try{
        fs.unlinkSync(`../${nombre}`);
        console.log("borrado")
    }catch(e){
        console.log(e)
    }
} 

const abrir = (nombre:string):void => {
    try{
        const open = child_process.spawn('open',[`../${nombre}`])
        open.stdout.on('data', (data:string) =>{
            console.log(`${data}`);
        })
        open.stderr.on('data', (data:string) =>{
            console.log(data);
        })
        open.on('data', (data:string) =>{
            console.log(data);
        })
    }catch(e){
        console.log(e)
    }
} 


app.listen(7890 , () => console.log("servidor en pie"));