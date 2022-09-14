//import { Link } from 'react-router-dom';
import './notas.css'
import { useState } from 'react'
import NewNota from './crearNuevaNota'
import MostrarNotas from './mostrarNotas'
import { NotasGenericas } from '../../../react-app-env';

interface Props{
  RepoDeNotas:string;
}

const Notas = ({RepoDeNotas}: Props):JSX.Element => {
  const [controlador , setControlador] = useState<number>(0);  
  const [ConstructorDeNota , setConstructorDeNota] = useState<NotasGenericas>({
    'id':0,
    'Name':'',
    'Text':'',
    'Father': RepoDeNotas,
  }) 

  const cancelar = ():void => {
    setControlador(0);
    setConstructorDeNota({
      'id':0,
      'Name':'',
      'Text':'',
      'Father': RepoDeNotas,
    })
  }

  return (
    <div className="d-flex flex-column align-items-center" style={{height: '100%' , width: '100%'}}>
      <div className='tableroNotas d-flex justify-content-center align-items-center'>
        {controlador === 0 && <button className="btnNotas" onClick={(e)=>{e.preventDefault(); setControlador(1)}}><i style={{color: 'white' , backgroundColor: 'rgb(85, 85, 85)'}} className="fa-solid fa-plus"></i></button>}
        {controlador !== 0 && <button className="btnNotas" onClick={(e)=>{e.preventDefault();cancelar()}}>CANCELAR</button>}
      </div>
      <div className='boxNotas row justify-content-center'>
        {controlador === 0 && <MostrarNotas ConstructorDeNota={ConstructorDeNota} setConstructorDeNota={setConstructorDeNota} RepoDeNotas={RepoDeNotas} controlador={setControlador}/>}
        {controlador !== 0 && 
        <NewNota setFuncion={setControlador} funcion={controlador} RepoDeNotas={RepoDeNotas} 
        ConstructorDeNota={ConstructorDeNota} setConstructorDeNota={setConstructorDeNota} />}
      </div>
    </div>
    )
}

export default Notas;