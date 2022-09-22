import './style.css'
import { useState } from 'react'
import {Marcas} from '../../../react-app-env'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

//const PATH:string = "http://localhost:7890/Fechas/" 
interface Props{
    fechasPorMes:number[][];
    indentificador:Marcas[];
    setRecarga:React.Dispatch<React.SetStateAction<boolean>>;
}

const CalendarioConvencional = ({fechasPorMes , indentificador , setRecarga}:Props):JSX.Element =>{
    const { id_user } = useSelector((state:RootState) => state.id_user)
    const { Path } = useSelector((state:RootState) => state.path)
    const PorDeFecto:Marcas = {
        "id":0,
        'Id_dias':0,
        'Id_mes':0,
        'Nombre':'',
        'Id_user': id_user, 
    }
    const [meses , setMeses] = useState<number>(0);
    const [consNota , setConsNota] = useState<Marcas>(PorDeFecto);
    const [eventos , setEventos] = useState<number[]>([0 , 0]);

    const today = (id:number):boolean => {
        let dia = new Date();
        let aux:number[] = [dia.getDate() , dia.getMonth()]
        return aux[0] === id && aux[1] === meses+8;
    }

    const cancelar = ():void =>{
        setEventos([0 , 0])
        setConsNota(PorDeFecto)
    }

    const disminuir = ():void =>{
        if(meses !== 0){
            setMeses(meses - 1);
        }
    }

    const aumentar = ():void =>{
        if(meses !== 3){
            setMeses(meses + 1);
        }
    }

    const crearNota = async():Promise<void> =>{
        console.log('crear')
        await axios.post(Path+ 'Fechas/' , 
            {
                Id_dias:eventos[0]-1 , 
                Id_mes:meses , 
                Nombre:consNota.Nombre,
                Id_user: process.env.REACT_APP_ID
            }    
        )
        setEventos([0 , eventos[1]]);
        setConsNota(PorDeFecto)
        setRecarga(true)
    }

    const borrar = async ():Promise<void> =>{
        await axios.delete(`${Path+ 'Fechas/'}${consNota.id}`)
        setEventos([0,0]);
        setConsNota(PorDeFecto)
        setRecarga(true)
    } 

    const editar = async ():Promise<void> =>{
        await axios.put(`${Path+ 'Fechas/'}${consNota.id}` , 
            {
                Nombre:consNota.Nombre
            }
        )
        setEventos([0,0]);
        setConsNota(PorDeFecto)
        setRecarga(true)
    } 
    
    const marcar = (id:number):void =>{
        setEventos([id, eventos[1]]);
        today(1)
    }

    const iEnM = (id:number):boolean =>{
        let aux:number[] | null = indentificador.filter((n)=> n.Id_mes === meses).map((m)=> m.Id_dias)
        return aux.includes(id)
    }

    const verNota = (id:number):void =>{
        let aux:Marcas[] | null = indentificador.filter((n)=> n.Id_mes === meses).filter((m)=> m.Id_dias === id-1)
        setConsNota({
            "id":aux[0].id,
            'Id_dias':aux[0].Id_dias,
            'Id_mes':aux[0].Id_mes,
            'Nombre':aux[0].Nombre,
            'Id_user': aux[0].Id_user, 

        })
        setEventos([id, id]);
    }   

    return (
        <>
        {eventos[0] === 0 && <div className="boxDeCalendario">
            <div className="boxCalSup TemaClaro">
                <div className="TemaClaro" style={{width:'33%' , borderTopLeftRadius: '14px'}}>
                    {meses !== 0 && <i className='fa-solid fa-left-long TemaClaro ms-2 HoverJenerico' onClick={(e) => {e.preventDefault(); disminuir()}}></i>}
                </div>
                <div className="TemaClaro text-center" style={{width:'33%'}}>
                    <p className='TemaClaro'>
                        {meses === 0 ? 'SEPTEMBER' :
                        meses === 1 ? 'OCTOBER' :
                        meses === 2 ? 'NOVEMBER': 'DECEMBER'} 2022
                    </p>
                </div>
                <div className="TemaClaro text-end" style={{width:'33%' ,borderTopRightRadius: '14px' }}>
                    {meses !== 3 && <i className='fa-solid fa-right-long TemaClaro me-2 HoverJenerico' onClick={(e) => {e.preventDefault(); aumentar()}}></i>}
                </div>
                </div>
            <div className="d-flex justify-content-around TemaClaro">
                <p className='text-center tamMINN TemaClaro'>Sun</p>
                <p className='text-center tamMINN TemaClaro'>Mon</p>
                <p className='text-center tamMINN TemaClaro'>Tue</p>
                <p className='text-center tamMINN TemaClaro'>Wed</p>
                <p className='text-center tamMINN TemaClaro'>Thu</p>
                <p className='text-center tamMINN TemaClaro'>Fri</p>
                <p className='text-center tamMINN TemaClaro'>Sat</p>
            </div>
            <div className="boxCalInf">
                {fechasPorMes.map((n , i) => (
                    <>
                        {i === meses && 
                        n.map((m , y)=>(
                            <>
                                {!iEnM(y)  && 
                                <div className={`diasGrid centradoColumn 
                                ${(y === 28 && n.length === 35) ? 'borderInfIz' : 
                                (y === 35 && n.length === 42) ? 'borderInfIz' : ''} 
                                ${(y === 34 && n.length === 35) ? 'borderInfDr' : 
                                (y === 41 && n.length === 42) ? 'borderInfDr' : ''} 
                                ${y === 0 || y === 7 || y === 14 || y === 21 || y === 28 || y === 35
                                || y === 6 || y === 13 || y === 20 || y === 27 || y === 34 || y ===41 ? 'finde' : ''}
                                ${today(m) ? 'today' : ''}`}
                                onClick={(e)=>{e.preventDefault();
                                // eslint-disable-next-line no-lone-blocks
                                {m !== 0 ? marcar(y+1) : console.log("")}}}>
                                    {m!== 0 ? m : ''}           
                                </div>}
                                {iEnM(y) &&  
                                <div className={`diasGrid ${today(m) ? 'marcadoToday':'marcado'} centradoColumn 
                                ${(y === 28 && n.length === 35) ? 'borderInfIz' : 
                                (y === 35 && n.length === 42) ? 'borderInfIz' : ''} 
                                ${(y === 34 && n.length === 35) ? 'borderInfDr' : 
                                (y === 41 && n.length === 42) ? 'borderInfDr' : ''}`}
                                onClick={(e)=>{e.preventDefault();verNota(y+1)}}>
                                    {m}           
                                </div>}
                            </>
                        ))}
                    </>
                ))}
            </div>
        </div>}
        {eventos[0] !== 0 &&
            <form className="d-flex flex-column confirmacion" onSubmit={(e)=>{e.preventDefault(); 
            // eslint-disable-next-line no-lone-blocks
            {eventos[1] !== 0 ? editar() : crearNota() }}} style={{backgroundColor:'rgb(42, 71, 71)'}}>
                <div className="d-flex justify-content-center" style={{width:'100%' , backgroundColor:'rgb(42, 71, 71)'}}>
                    <textarea name="nota" autoComplete='off' maxLength={100} value={consNota.Nombre} onChange={(e)=> {e.preventDefault();setConsNota({
                        "id":consNota.id,
                        'Id_dias':consNota.Id_dias,
                        'Id_mes':consNota.Id_mes,
                        'Nombre':e.target.value,
                        'Id_user':consNota.Id_user
                    })}}className='textTarea TemaClaro' placeholder='Nombre De La Anotacion'>
                    </textarea>
                </div>
                <div className='mt-3 d-flex justify-content-center' style={{width:'65%' , fontSize:'0px' , backgroundColor:'rgb(42, 71, 71)'}}>
                    {eventos[1] && 
                    <button type="button" className="btn btn-danger me-3" style={{width: '30%'}} onClick={(e)=> {e.preventDefault(); borrar()}}>
                        Borrar
                    </button>}
                    <button type="button" className="btn btn-light" style={{width: '30%'}} onClick={(e)=>{e.preventDefault(); cancelar();}}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary ms-3" style={{width: '30%'}}>
                        {eventos[1] !== 0 ? 'Editar' : 'Marcar'}
                    </button>
                </div>
            </form>}
    </>)
}

export default CalendarioConvencional;