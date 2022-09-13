//import { Link } from 'react-router-dom';
import './documentos.css'
import { Elementos } from './elementos'
import ObtenerArchivo from './obtenerArchivo'
import { useState } from 'react';

const Documentos = ():JSX.Element => {
    const [eventos , setEventos] = useState<number>(0)

    const agregar = ():void =>{
        if(eventos === 0){
            setEventos(1)
        }else{
            setEventos(0)
        }
    }

    return (
        <div className="d-flex flex-column align-items-center" style={{height: '100%' , width: '100%'}}>
            <div className='tableroDocumentos d-flex justify-content-center align-items-center'>
                {eventos === 0 && 
                <button className="btnDocumentos" onClick={(e)=>{e.preventDefault() ; agregar()}}><i style={{color: 'white' , backgroundColor: 'rgb(85, 85, 85)'}} className="fa-solid fa-plus"></i></button>}
                {eventos === 1 && <ObtenerArchivo controlador={setEventos} />}
            </div>
            <div className='row mt-5 justify-content-center oneHundredEighty'>
                <Elementos />
            </div>
        </div>
    )
}

export default Documentos;