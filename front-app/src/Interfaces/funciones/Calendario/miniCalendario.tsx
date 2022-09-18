import './style.css'
import {Marcas} from '../../../react-app-env'
import { useEffect, useState } from 'react'
import axios from 'axios';

const PATH:string = "http://localhost:7890/Fechas/"

const MiniCalendario = ():JSX.Element =>{
    const [indentificador , setIndentificador] = useState<Array<Marcas>>([]);
    const [fechasPorMes ] = useState<number[][]>([
        [0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0],
        [0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31 ,0,0,0,0,0],
        [0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0,0,0],
        [0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    ])  

    useEffect(()=> {
        CargarInde();
    },[])

    const today = (id:number):boolean => {
        let dia = new Date();
        return dia.getDate() === id;
    }

    const CargarInde = async ():Promise<void> => {
        let aux = await axios.get(PATH)
        setIndentificador(aux.data.map((n:any)=> {
            return {
                id: n.id,
                Id_dias: n.Id_dias,
                Id_mes: n.Id_mes,
                Nombre: n.Nombre
            }
        }))
    }


    const iEnM = (id:number):boolean =>{
        let aux:number[] | null = indentificador.filter((n)=> n.Id_mes === 0).map((m)=> m.Id_dias)
        return aux.includes(id)
    }

    return (
        <div className="boxDeCalendarioMini">
            <div className="boxCalSupMin centradoColumn TemaClaro">
                {new Date().getMonth() === 8 ? 'SEPTEMBER':
                new Date().getMonth() === 9 ? 'OCTOBER':
                new Date().getMonth() === 10 ? 'NOVEMBER':
                new Date().getMonth() === 11 ? 'DECEMBER': ''}
            </div>
            <div className="diasNombre d-flex justify-content-around TemaClaro">
                <p className='text-center tamMINN mb-1 TemaClaro' style={{fontSize:"15px"}}>S</p>
                <p className='text-center tamMINN mb-1 TemaClaro' style={{fontSize:"15px"}}>M</p>
                <p className='text-center tamMINN mb-1 TemaClaro' style={{fontSize:"15px"}}>Tu</p>
                <p className='text-center tamMINN mb-1 TemaClaro' style={{fontSize:"15px"}}>W</p>
                <p className='text-center tamMINN mb-1 TemaClaro' style={{fontSize:"15px"}}>Th</p>
                <p className='text-center tamMINN mb-1 TemaClaro' style={{fontSize:"15px"}}>F</p>
                <p className='text-center tamMINN mb-1 TemaClaro' style={{fontSize:"15px"}}>S</p>
            </div>
            <div className="boxCalInf">
                {fechasPorMes.map((n , i) => (
                        <>
                        {i === 0 && 
                        n.map((m , y)=>(
                            <>
                                {!iEnM(y) &&
                                <div className={`diasGrid centradoColumn 
                                ${(y === 28 && n.length === 35) ? 'borderInfIz' : 
                                (y === 35 && n.length === 42) ? 'borderInfIz' : ''} 
                                ${(y === 34 && n.length === 35) ? 'borderInfDr' : 
                                (y === 41 && n.length === 42) ? 'borderInfDr' : ''} 
                                ${y === 0 || y === 7 || y === 14 || y === 21 || y === 28 || y === 35
                                || y === 6 || y === 13 || y === 20 || y === 27 || y === 34 || y ===41 ? 'finde' : ''} ${today(m) ? 'today' : ''}`}>
                                </div>}
                                {iEnM(y) && 
                                <div className={`diasGrid ${today(m)?'marcadoToday':'marcado'} centradoColumn 
                                ${(y === 28 && n.length === 35) ? 'borderInfIz' : 
                                (y === 35 && n.length === 42) ? 'borderInfIz' : ''} 
                                ${(y === 34 && n.length === 35) ? 'borderInfDr' : 
                                (y === 41 && n.length === 42) ? 'borderInfDr' : ''} 
                                `} style={{fontSize: '13px'}}>
                                </div>}
                            </>
                        ))}
                    </>
                ))}
            </div>
        </div>
    )
}

export default MiniCalendario;