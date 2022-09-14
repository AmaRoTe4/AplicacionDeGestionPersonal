import { Link } from 'react-router-dom';
import '../MainStyle.css';
import './UTNstyle.css';

const UTNMain = ():JSX.Element => {
  return (
    <div className="oneHundred fondoUTN d-flex flex-column justify-content-center align-items-center">
        <Link to="/" className="m-4 btn-regreso position-absolute top-0 start-0 translate-middle d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgb(42, 71, 71)'}}><i style={{backgroundColor: 'rgb(42, 71, 71)' , color: "white"}} className="fa-solid fa-left-long"></i></Link>
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
    </div>
    )
}

export default UTNMain;