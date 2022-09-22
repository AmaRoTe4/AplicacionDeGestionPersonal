import { useEffect, useState } from 'react';
import CalendarioConvencional from './calendarioNormal';
import './style.css';
import {Marcas} from '../../../react-app-env'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

//const PATH:string = "http://localhost:7890/Fechas/"

const Calendario = ():JSX.Element => {
    const { id_user } = useSelector((state:RootState) => state.id_user) 
    const { Path } = useSelector((state:RootState) => state.path) 
    const [indentificador , setIndentificador] = useState<Array<Marcas>>([]);
    const [recarga , setRecarga] = useState<boolean>(true);
    const [fechasPorMes ] = useState<number[][]>([
        [0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0],
        [0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31 ,0,0,0,0,0],
        [0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0,0,0],
        [0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    ])  

    useEffect(()=> {
        CargarInde();
    },[recarga])

    const CargarInde = async ():Promise<void> => {
        let aux = await axios.get(Path + 'Fechas/')
        if(id_user){
            let notasAux:Marcas[] = aux.data.filter((n:Marcas) => 
                n.Id_user === id_user 
            )
            console.log(notasAux)
            setIndentificador(notasAux.map((n:any)=> {
                return {
                    id: n.id,
                    Id_dias: n.Id_dias,
                    Id_mes: n.Id_mes,
                    Nombre: n.Nombre,
                    Id_user: n.Id_user, 
                }
            }))
            setRecarga(false)
        }
    }

    return (
        <div className="oneHundred d-flex justify-content-center align-items-center" style={{backgroundColor:'rgb(42, 71, 71)'}}>
            <Link className='btn-regreso position-absolute top-0 start-0 translate-middle d-flex justify-content-center align-items-center' style={{margin:'30px' , backgroundColor:'rgb(42, 71, 71)'}} to="/">
                <i  style={{backgroundColor:'rgb(42, 71, 71)'}} className="fa-solid fa-arrow-left "></i>
            </Link>
            <CalendarioConvencional 
            fechasPorMes={fechasPorMes} 
            indentificador={indentificador} 
            setRecarga={setRecarga}/>
        </div>
    )
}

export default Calendario;

//{/*<MiniCalendario 
//fechasPorMes={fechasPorMes} 
//indentificador={indentificador} />*/}