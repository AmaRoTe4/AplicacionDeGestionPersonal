import { Link } from 'react-router-dom';
import '../MainStyle.css';
import './UTNstyle.css';
import MiniCalendario from '../funciones/Calendario/miniCalendario'

const UTNMain = ():JSX.Element => {
  return (
    <div className="oneHundred fondoUTN d-flex flex-column justify-content-center align-items-center">
        {/*<Link to="/" className="m-4 btn-regreso position-absolute top-0 start-0 translate-middle d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgb(42, 71, 71)'}}><i style={{backgroundColor: 'rgb(42, 71, 71)' , color: "white"}} className="fa-solid fa-left-long"></i></Link>*/}
        <Link to="/Calendario" className='position-absolute top-0 end-0 m-3 calendarioIcono fondoFoto'>
            <MiniCalendario />
        </Link>
        <div className="thirty fondoUTN d-flex justify-content-center align-items-center">
            <p className="titulo">UTN</p>
        </div>
        <div className="oneHundredSeventy boxDeLinks d-flex justify-content-center">
            <Link to="/Estadistica" className="boxMainUtn d-flex justify-content-center align-items-center">ESTADISTICA</Link>
            <Link to="/Laboratorio" className="boxMainUtn d-flex justify-content-center align-items-center">ARQUITECTURA</Link>
            <Link to="/Programacion" className="boxMainUtn d-flex justify-content-center align-items-center">PROGRAMACION</Link>
            <Link to="/Metodologia" className="boxMainUtn d-flex justify-content-center align-items-center">METODOLOGIA</Link>
            <Link to="/Ingles" className="boxMainUtn d-flex justify-content-center align-items-center">INGLES</Link>
        </div>
    </div>
    )
}

export default UTNMain;