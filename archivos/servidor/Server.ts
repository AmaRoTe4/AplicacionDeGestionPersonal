const fs = require('fs');
const cors = require('cors');
const json = require('express')
const child_process = require('child_process');

export const app = require('express')(),
    multer = require('multer'),
    storage = multer.diskStorage({
        destination: (req:any, file:any, cb:any) => {
            cb(null, '../Estadistica');
        },
        filename: (req:any, file:any, cb:any) => {
            cb(null, file.originalname);
        },
    }),
    upload = multer({storage:storage})

app.use(cors());
app.use(json.json());
app.use(json.urlencoded({extended:false}));

app.post('/subir', upload.single("archivo"),  (req:any, res:any) => {
    try{
        res.json(req.file.path);
    }catch(e){
        console.log(e);
    }
})

app.get('/' , (req:any, res:any) => {
    try{
        res.json(lecturaDeCarpeta('Estadistica'));
    }catch(e){
        console.log(e);
    }
})

app.get('/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        abrir(nombre);
    }catch(e){
        console.log(e);
    }
})

app.delete('/:nombre' , (req:any, res:any) => {
    try{
        const nombre = req.params.nombre;
        remove(nombre);
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
        fs.unlinkSync(`../Estadistica/${nombre}`);
        console.log("borrado")
    }catch(e){
        console.log(e)
    }
} 

const abrir = (nombre:string):void => {
    try{
        const open = child_process.spawn('open',[`../Estadistica/${nombre}`])
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