//import { Link } from 'react-router-dom';
import './documentos.css'
import { useState } from 'react'
import axios from 'axios'

interface Props{
    nombre: string
}

const ObtenerArchivo = ({nombre}: Props):JSX.Element => {
    const [elementos , setElementos] = useState<FileList | null>()

    const subir = async(e:React.FormEvent<HTMLFormElement>):Promise<void> => {
        const archivoObj:any = e.currentTarget.archivo.files[0];
        
        let postData:any = new FormData();

        //nombre que espera data cruda
        postData.append("archivo" , archivoObj)

        axios.post(`http://localhost:7890/${nombre}` , postData);
        setElementos(null);
    }

    return (
        <div className="d-flex align-items-center justify-content-center mt-5" style={{height: '100%' , width: '100%'}}>
            <form action="/" className="d-flex flex-column mt-4" onSubmit={(e) => {e.preventDefault() ; subir(e)}}>
                <button className="btnDocumentos HoverJenerico"><label htmlFor="archivo" className="oneHundredPC centradoColumn" style={{backgroundColor: 'rgb(85, 85, 85)'}} ><i style={{color: 'white' , backgroundColor: 'rgb(85, 85, 85)'}} className="fa-solid fa-plus"></i></label></button>
                <input type='file' name="archivo" id="archivo" style={{display: 'none'}} onChange={(e) => {setElementos(e.target.files)}} />
                {elementos ? <button type="submit" style={{backgroundColor: 'rgb(10 , 155 , 20)'}} className="btn" onSubmit={e => e.preventDefault()}><i style={{backgroundColor: 'rgb(10 , 155 , 20)' , color:'white'}}className="fa-solid fa-check"></i></button> : ""}
            </form>
        </div>
    )
}

export default ObtenerArchivo;