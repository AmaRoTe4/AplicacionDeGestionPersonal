import { Link } from 'react-router-dom';
import './index.css'
import { useState } from 'react';
import Notas from '../InterfaceDeNotas/Notas';
import Documentos from '../documentos/documentos';

interface Props{
    Nombre:string
}

const Estructura = ({Nombre}: Props):JSX.Element => {
  const [controlador , setControlador] = useState<Array<boolean | number>>([false , 0 ])

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
        <div className='middlesInver d-flex flex-column align-items-center'>
          <p className='nombreDeInterface justify-content-center align-items-center text-break'>{Nombre.toLocaleUpperCase()}</p>  
          <button className='btnInteracion d-flex flex-column justify-content-center align-items-center' onClick={(e)=> {e.preventDefault() ; seleccionDeInterface(1)}}>Documentos</button>
          <button className='btnInteracion d-flex flex-column justify-content-center align-items-center' onClick={(e)=> {e.preventDefault() ; seleccionDeInterface(2)}}>Notas</button>
        </div>
        <div className='middlesInver d-flex justify-content-center align-items-end'>
          <Link to="/" className="btn" style={{backgroundColor: "black" , width:"95%" , transform: "translate(0px, -5px"}}><i style={{backgroundColor: "black"}} className="fa-solid fa-left-long"></i></Link>
        </div>
      </div>}
      <button className="btn btnDeLateral TemaClaro" onClick={(e)=> {e.preventDefault(); controladorBarraLaterl();}} style={{transform: `${controlador[0] ? "translate(-620px, -285px)" :"translate(-400px, -285px)"}`}}>
        <i className={`${controlador[0] ? 'fa-solid fa-right-long' : 'fa-solid fa-left-long'}`}></i>
      </button>
      <div className="actividad d-flex justify-content-center align-items-center">
        {controlador[1] === 0 && <p style={{fontSize: "60px"}}>{Nombre}</p>}
        {controlador[1] === 1 && <Documentos nombre={Nombre} />}
        {controlador[1] === 2 && <Notas RepoDeNotas={Nombre}/>}
      </div>
    </div>
    )
}

export default Estructura;