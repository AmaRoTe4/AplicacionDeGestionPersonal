/* eslint-disable react-hooks/exhaustive-deps */
//import { Link } from 'react-router-dom';
import './documentos.css'
import axios from 'axios'
import { useState  , useEffect } from 'react'

interface Props{
    setEventoPrincipal:React.Dispatch<React.SetStateAction<number>>
    nombre:string
}

export const Elementos = ({setEventoPrincipal , nombre}: Props):JSX.Element => {
    const [ path ] = useState<string>(`http://localhost:7890/${nombre}/`)
    const [archivos , setArchivos] = useState<Array<string[] | string>>()
    const [Eventos , setEventos] = useState<number>(0)
    const [seleccionado , setSeleccionado] = useState<string>()

    useEffect(() => {
        Archivos();
    },[archivos])

    const Archivos = async():Promise<void> => {
        const aux = await axios.get<Array<string[]>>(path)
        setArchivos(aux.data)
    }

    const afrimacion = ():void =>{
        setEventos(1);
    }

    const remove = async():Promise<void> => {
        setEventos(0);
        setEventoPrincipal(0);
        await axios.delete(`${path}${seleccionado}`)
    }

    const verArchivo = async ():Promise<void> =>{
        setEventos(0);
        setEventoPrincipal(0);
        await axios.get(`${path}${seleccionado}`)
    }

    const acciones = (nombre:string):void =>{
        setSeleccionado(nombre);
        setEventos(2);
        setEventoPrincipal(2);
    }

    const cancelar = ():void =>{
        setEventoPrincipal(0);
        setEventos(0)
    }

    const ColorArchivos = (n: string | string[]):JSX.Element => {
        let tema:string = 'generico' 

        if(n[1]){
            switch(n[1]){
                case 'pdf':
                    tema = 'pdf'
                    break;
                case 'json':
                    tema = 'json'
                    break;
                case 'ods':
                    tema = 'xlsxYods'
                    break;
                case 'odt':
                    tema = 'docxYodt'
                    break;
                case 'xlsx':
                    tema = 'xlsxYods'
                    break;
                case 'docx':
                    tema = 'docxYodt'
                    break;
                case 'pptx':
                    tema = 'pptx'
                    break;
                case 'jpg':
                    tema = 'foto'
                    break;
                case 'png':
                    tema = 'foto'
                    break;
                case 'jpeg':
                    tema = 'foto'
                    break;
            }
        }

        return (
            <>
                <div className={`${tema} archivos-list fondoFoto`} onClick={(e) => {e.preventDefault(); acciones(`${n[0]}.${n[1]}`);}}></div>
                <p className="text-break text-center p-archivos-List">{n[0]}.{n[1]}</p>
            </>
        )
    }

    return (
        <div className="row sinBarraDeScrool justify-content-center" style={{height: '100%' , width: '100%' , overflowX:'hidden', overflowY:'scroll'}}>
            {Eventos === 0 && archivos && archivos.map((n,i)=> (
                <div key={i} className={`col-2 archvios-list-box d-flex flex-column align-content-center justify-content-center ${i >= 6 ? 'menos70' : ''}`}>
                    {ColorArchivos(n)}
                </div>
            ))}
            {Eventos === 2 && 
                <div className="d-flex flex-column p-5 confirmacion" >
                    <button type="button" className="btn btn-primary" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); verArchivo()}}>Ver</button>
                    <button type="button" className="btn btn-light mt-3" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); cancelar();}}>Cancelar</button>
                    <button type="button" className="btn btn-danger mt-3" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); afrimacion();}}>Eliminar</button>
                </div>
            }
            {Eventos === 1 && 
                <div className="d-flex flex-column p-5 confirmacion" >
                    <button type="button" className="btn btn-danger" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); remove()}}>Confirmar</button>
                    <button type="button" className="btn btn-primary mt-3" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); cancelar();}}>Cancelar</button>
                </div>
            }
        </div>
    )
}