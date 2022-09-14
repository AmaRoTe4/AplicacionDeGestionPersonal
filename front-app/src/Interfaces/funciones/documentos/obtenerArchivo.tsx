//import { Link } from 'react-router-dom';
import './documentos.css'
import { useState } from 'react'
import axios from 'axios'

interface Props{
    controlador: React.Dispatch<React.SetStateAction<number>>
    nombre: string
}

const ObtenerArchivo = ({controlador , nombre}: Props):JSX.Element => {
    const [elementos , setElementos] = useState<FileList | null>()

    const subir = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault()
        const archivoObj:any = e.currentTarget.archivo.files[0];
        
        let postData:any = new FormData();

        //nombre que espera data cruda
        postData.append("archivo" , archivoObj)

        axios.post(`http://localhost:7890/${nombre}` , postData);
        controlador(0);
    }

    return (
        <div className="d-flex align-items-center justify-content-center mt-5" style={{height: '100%' , width: '100%'}}>
            <form action="/" className="d-flex flex-column" onSubmit={(e) => {subir(e)}}>
                <button className="btnDocumentos HoverJenerico"><label htmlFor="archivo" className="oneHundredPC centradoColumn" style={{backgroundColor: 'rgb(85, 85, 85)'}} ><i style={{color: 'white' , backgroundColor: 'rgb(85, 85, 85)'}} className="fa-solid fa-plus"></i></label></button>
                <input type='file' name="archivo" id="archivo" style={{display: 'none'}} onChange={(e) => {setElementos(e.target.files)}} />
                {elementos ? <button type="submit" style={{backgroundColor: 'rgb(10 , 155 , 20)'}} className="btn mt-3"><i style={{backgroundColor: 'rgb(10 , 155 , 20)' , color:'white'}}className="fa-solid fa-check"></i></button> : ""}
            </form>
        </div>
    )
}

export default ObtenerArchivo;