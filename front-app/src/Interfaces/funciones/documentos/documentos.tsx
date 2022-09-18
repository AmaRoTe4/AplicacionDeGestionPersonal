//import { Link } from 'react-router-dom';
import './documentos.css'
import { Elementos } from './elementos'
import ObtenerArchivo from './obtenerArchivo'
import { useState } from 'react';

interface Props{
    nombre:string;
}


const Documentos = ({nombre}:Props):JSX.Element => {
    const [eventos , setEventos] = useState<number>(0)

    return (
        <div className="d-flex flex-column align-items-center" style={{height: '100%' , width: '100%'}}>
            <div className='tableroDocumentos d-flex justify-content-center align-items-center'>
                {eventos !== 2 && <ObtenerArchivo nombre={nombre} />}
            </div>
            <div className='row mt-5 justify-content-center oneHundredEighty'>
                <Elementos nombre={nombre} setEventoPrincipal={setEventos}/>
            </div>
        </div>
    )
}

export default Documentos;