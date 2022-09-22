import { Link } from 'react-router-dom';
import '../MainStyle.css';
import './UTNstyle.css';
import axios from 'axios'
import { useEffect } from 'react'
import MiniCalendario from '../funciones/Calendario/miniCalendario'

const UTNMain = ():JSX.Element => {

    useEffect(() => {
        iniciar()
    },[])

    const iniciar = async ():Promise<void> => {
        if(!process.env.REACT_APP_ID){
            try{
                const rand = Math.floor(Math.random()*100000)
                const message = await axios.get('http://localhost:7890/Login/' + rand)
                console.log(message) 
            }catch(err){
                console.log(err);
            }
        }else{
            //console.log(navigator.platform.indexOf('Linux'));
        }
    }

  return (
    <div className="oneHundred fondoUTN d-flex flex-column justify-content-center align-items-center">
        {process.env.REACT_APP_ID && 
        <>
            <Link to="/Calendario" className='position-absolute top-0 end-0 m-3 calendarioIcono fondoFoto'>
                <MiniCalendario />
            </Link>
            <div className="thirty fondoUTN d-flex justify-content-center align-items-center">
                <p className="titulo">UTN</p>
            </div>
            <div className="oneHundredSeventy boxDeLinks d-flex justify-content-center">
                <Link to="/UTN/Estadistica" className="boxMainUtn d-flex justify-content-center align-items-center">ESTADISTICA</Link>
                <Link to="/UTN/Laboratorio" className="boxMainUtn d-flex justify-content-center align-items-center">ARQUITECTURA</Link>
                <Link to="/UTN/Programacion" className="boxMainUtn d-flex justify-content-center align-items-center">PROGRAMACION</Link>
                <Link to="/UTN/Metodologia" className="boxMainUtn d-flex justify-content-center align-items-center">METODOLOGIA</Link>
                <Link to="/UTN/Ingles" className="boxMainUtn d-flex justify-content-center align-items-center">INGLES</Link>
            </div>
        </>}
    </div>
    )
}

export default UTNMain;