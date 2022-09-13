import { Link } from 'react-router-dom';
import './Estadistica.css'
import { useState } from 'react';
import Notas from '../../funciones/notas/Notas';
import Documentos from '../../funciones/documentos/documentos';
import { NotasGenericas } from '../../../react-app-env.d'

const Estadistica = ():JSX.Element => {
  const [controlador , setControlador] = useState<Array<boolean | number>>([false , 0 ])
  const [notas , setNotas] = useState<Array<NotasGenericas>>([])

  //controlador
  const controladorBarraLaterl = ():void => {
    if(!controlador[0]){
      setControlador([true , controlador[1]])
    }else{
      setControlador([false , controlador[1]])
    }
  }

  //interface
  const seleccionDeInterface = (contrl: number):void =>{
      setControlador([controlador[0] , contrl]);
  }

  return (
    <div className="oneHundred fondoEstadistica d-flex justify-content-center align-items-center">
      {!controlador[0] && <div className="barraLateral d-flex flex-column justify-content-center align-items-center">
        <button className='btnInteracion d-flex flex-column justify-content-center align-items-center' onClick={(e)=> {e.preventDefault() ; seleccionDeInterface(1)}}>Resoluciones</button>
        <button className='btnInteracion d-flex flex-column justify-content-center align-items-center' onClick={(e)=> {e.preventDefault() ; seleccionDeInterface(2)}}>Documentos</button>
        <button className='btnInteracion d-flex flex-column justify-content-center align-items-center' onClick={(e)=> {e.preventDefault() ; seleccionDeInterface(3)}}>Notas</button>
        <Link to="/UTN" className="btn mt-3" style={{backgroundColor: "black" , width:"100px"}}><i style={{backgroundColor: "black"}} className="fa-solid fa-left-long"></i></Link>
      </div>}
      <button className="btn btnDeLateral" onClick={(e)=> {e.preventDefault(); controladorBarraLaterl();}} style={{transform: `${controlador[0] ? "translate(-620px, -285px)" :"translate(-400px, -285px)"}` , backgroundColor: "rgb(214,11,11)"}}>
        <i className={`${controlador[0] ? 'fa-solid fa-right-long' : 'fa-solid fa-left-long'}`} style={{backgroundColor: "rgb(214,11,11)"}}></i>
      </button>
      <div className="actividad d-flex justify-content-center align-items-center">
        {controlador[1] === 0 && <p style={{fontSize: "60px"}}>ESTADISTICA</p>}
        {controlador[1] === 1 && <p style={{fontSize: "60px"}}>Resolucion</p>}
        {controlador[1] === 2 && <Documentos />}
        {controlador[1] === 3 && <Notas notas={notas}  setNotas={setNotas} />}
      </div>
    </div>
    )
}

export default Estadistica;