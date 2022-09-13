//import { Link } from 'react-router-dom';
import './documentos.css'
import { useState } from 'react'
import axios from 'axios'

interface Props{
    controlador: React.Dispatch<React.SetStateAction<number>>
}

const ObtenerArchivo = ({controlador}: Props):JSX.Element => {
    const [elementos , setElementos] = useState<FileList | null>()

    const subir = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault()
        const archivoObj:any = e.currentTarget.archivo.files[0];
        
        let postData:any = new FormData();

        //nombre que espera data cruda
        postData.append("archivo" , archivoObj)

        axios.post('http://localhost:7890/subir/' , postData);
    }

    return (
        <div className="d-flex align-items-center justify-content-center mt-5" style={{height: '100%' , width: '100%'}}>
            <form action="/" className="d-flex flex-column" onSubmit={(e) => {subir(e)}}>
                <label htmlFor="archivo" className="InputArchivos"
                style={{backgroundColor: 'white' ,color: 'black'}}
                >{elementos ? 'Cambiar Archivo' : 'Agregar Archivo'}</label>
                <input type='file' name="archivo" id="archivo" style={{display: 'none'}} onChange={(e) => {setElementos(e.target.files)}} />
                {elementos ? <button type="submit" style={{backgroundColor: 'rgb(10 , 155 , 20)'}} className="btn mt-3"><i style={{backgroundColor: 'rgb(10 , 155 , 20)' , color:'white'}}className="fa-solid fa-check"></i></button> : ""}
            </form>
            <button className='cutBtn' style={{transform: `${elementos ? 'translate(10px, -42px)' : 'translate(10px, -16px)'}`}} onClick={(e) => {e.preventDefault(); controlador(0)}}><i style={{color:'white', backgroundColor: 'red'}} className="fa-sharp fa-solid fa-xmark"></i></button>
        </div>
    )
}

export default ObtenerArchivo;