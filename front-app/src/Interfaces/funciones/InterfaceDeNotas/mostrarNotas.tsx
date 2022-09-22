import { NotasGenericas } from '../../../react-app-env'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

//const Path = 'http://localhost:7890/notas/';

interface Props {
  controlador:  React.Dispatch<React.SetStateAction<number>>;
  RepoDeNotas: string,
  setConstructorDeNota:React.Dispatch<React.SetStateAction<NotasGenericas>>
  ConstructorDeNota:NotasGenericas,
}

const MostrarNotas = ({controlador , RepoDeNotas, setConstructorDeNota , ConstructorDeNota}: Props):JSX.Element => {
    const { id_user } = useSelector((state:RootState) => state.id_user) 
    const { Path } = useSelector((state:RootState) => state.path) 
    const [notas , setNotas] = useState<NotasGenericas[]>();
    const [evento , setEvento] = useState<number>(0);


    useEffect(() => {
      cargaDeNotas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [evento])

    const cargaDeNotas = async():Promise<void> =>{
      const data = await axios.get(Path+'notas/');
      const aux = data.data
      setNotas(aux.filter((n:any) => n.Father === RepoDeNotas && n.Id_user === id_user));
    }

    const Acciones = (obj: NotasGenericas):void => {
      if(notas){
        let aux:NotasGenericas[] = notas.filter((n) => n.id === obj.id)
        setConstructorDeNota(aux[0]);
        setEvento(1)
      }
    }

    const Eliminar = async ():Promise<void> =>{
        await axios.delete(`${Path}notas/${ConstructorDeNota.id}`)
        setEvento(0);
    }

    const Activar = ():void =>{
        controlador(2)
        setEvento(0);
    }

    return (
        <>
          {evento === 0 && notas && notas.map((n , i) => (
            <div key={i} className={`col-2 centradoColumn text-center boxNotasAcceso ${i > 4 ? 'menos70' : ''}`} onClick={(e) => {e.preventDefault(); Acciones(n)}}>
                <p style={{backgroundColor:'white' , color:'black'}}>{n.Name}</p>    
            </div>
            )            
          )}
          {evento === 1 && 
            <div className="d-flex flex-column p-5 confirmacion" >
              <button type="button" className="btn btn-primary" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); Activar()}}>Ver</button>
              <button type="button" className="btn btn-light mt-3" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); setEvento(0)}}>Cancelar</button>
              <button type="button" className="btn btn-danger mt-3" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); setEvento(2)}}>Eliminar</button>
            </div>
          }
          {evento === 2 && 
            <div className="d-flex flex-column p-5 confirmacion" >
                <button type="button" className="btn btn-danger" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); Eliminar()}}>Confirmar</button>
                <button type="button" className="btn btn-primary mt-3" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); setEvento(0);}}>Cancelar</button>
            </div>
          }
        </>
    )
}

export default MostrarNotas;