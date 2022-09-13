//import { Link } from 'react-router-dom';
import './documentos.css'
import axios from 'axios'
import { useState  , useEffect } from 'react'

const path = 'http://localhost:7890/'

export const Elementos = ():JSX.Element => {
    const [archivos , setArchivos] = useState<Array<string[] | string>>()
    const [Eventos , setEventos] = useState<number[]>([0,0])
    const [seleccionado , setSeleccionado] = useState<string>()

    useEffect(() => {
        Archivos();
    },[archivos])

    const Archivos = async():Promise<void> => {
        const aux = await axios.get<Array<string[]>>(path)
        setArchivos(aux.data)
    }

    const afrimacion = (nombre:string):void =>{
        setEventos([1 , Eventos[1]]);
        setSeleccionado(nombre)
    }

    const remove = async():Promise<void> => {
        setEventos([0 , Eventos[1]]);
        await axios.delete(`${path}${seleccionado}`)
    }

    const verArchivo = async (nombre:string):Promise<void> =>{
        await axios.get(`${path}${nombre}`)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{border: '1px solid white', height: '100%' , width: '100%'}}>
            {Eventos[0] === 0 && archivos && archivos.map((n,i)=> (
                <div key={i} className="d-flex">
                    <li className='archivos-list' onClick={(e) => {e.preventDefault(); verArchivo(`${n[0]}.${n[1]}`);}}>{n[0]}{n[1] ? `.${n[1]}` : ''}</li>
                    <button onClick={(e)=> {e.preventDefault(); afrimacion(`${n[0]}${n[1] ? `.${n[1]}` : ''}`)}}>x</button>
                </div>
            ))}
            {Eventos[0] === 1 && 
                <>
                    <button type="button" className="btn btn-danger" onClick={(e)=>{e.preventDefault(); remove()}}>Confirmar</button>
                    <button type="button" className="btn btn-primary mt-3" onClick={(e)=>{e.preventDefault(); setEventos([0 , Eventos[1]]);}}>Cancelar</button>
                </>
            }
        </div>
    )
}