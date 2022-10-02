import { useEffect, useState } from 'react';
import CalendarioConvencional from './calendarioNormal';
import './style.css';
import {Marcas} from '../../../react-app-env'
import {getCalendario} from '../../../store/slice/Calendario/api';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { RootState } from '../../../store/store';

const Calendario = ():JSX.Element => {
    const dispatch = useDispatch()
    const { calendario } = useSelector((state:RootState) => state.calendario) 
    const [indentificador , setIndentificador] = useState<Array<Marcas>>([]);
    const [fechasPorMes ] = useState<number[][]>([
        [0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0],
        [0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31 ,0,0,0,0,0],
        [0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0,0,0],
        [0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    ])  

    useEffect(()=> {
        carga()
    },[calendario])

    const carga = ():void => {
        dispatch( getCalendario() )
        setIndentificador(calendario)
    }

    return (
        <div className="oneHundred d-flex justify-content-center align-items-center" style={{backgroundColor:'rgb(42, 71, 71)'}}>
            <Link className='btn-regreso position-absolute top-0 start-0 translate-middle d-flex justify-content-center align-items-center' style={{margin:'30px' , backgroundColor:'rgb(42, 71, 71)'}} to="/">
                <i  style={{backgroundColor:'rgb(42, 71, 71)'}} className="fa-solid fa-arrow-left "></i>
            </Link>
            <CalendarioConvencional 
            fechasPorMes={fechasPorMes} 
            indentificador={indentificador} 
            />
        </div>
    )
}

export default Calendario;

//{/*<MiniCalendario 
//fechasPorMes={fechasPorMes} 
//indentificador={indentificador} />*/}