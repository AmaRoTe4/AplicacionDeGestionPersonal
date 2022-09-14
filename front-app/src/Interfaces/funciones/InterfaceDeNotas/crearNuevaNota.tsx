//import { Link } from 'react-router-dom';
import './notas.css'
import { NotasGenericas } from '../../../react-app-env'
import axios from 'axios';

const Path = 'http://localhost:7890/notas/';

interface Props{
    setFuncion:React.Dispatch<React.SetStateAction<number>>;
    funcion:number;
    RepoDeNotas:string;
    ConstructorDeNota:NotasGenericas;
    setConstructorDeNota:React.Dispatch<React.SetStateAction<NotasGenericas>>;
}

const NewNota = ({setFuncion , funcion , RepoDeNotas ,ConstructorDeNota  ,setConstructorDeNota}: Props):JSX.Element => {

    const subirNota = async():Promise<void> =>{
        await axios.post(Path, {Name: ConstructorDeNota.Name , Text:ConstructorDeNota.Text, Father:RepoDeNotas})
        setConstructorDeNota({
            'id':ConstructorDeNota.id,
            'Name':'',
            'Text':'',
            'Father': RepoDeNotas,
        })
    }

    const editarNota = async():Promise<void> =>{
        await axios.put(`${Path}${ConstructorDeNota.id}`, {Name: ConstructorDeNota.Name , Text:ConstructorDeNota.Text})
        setConstructorDeNota({
            'id':ConstructorDeNota.id,
            'Name':'',
            'Text':'',
            'Father': RepoDeNotas,
        })
    }

    const cargarNota = ():void =>{
        if(funcion === 1){
            subirNota();
        }else{
            editarNota();
        }
        setFuncion(0);
      }

    const cargaDeNombre = (nombre: string):void =>{
        setConstructorDeNota({
            'id':ConstructorDeNota.id,
            'Text': ConstructorDeNota.Text,
            'Name':nombre,
            'Father': RepoDeNotas,
        })
    }

    const cargaDeText = (text: string):void =>{
        setConstructorDeNota({
            'id':ConstructorDeNota.id,
            'Text':text,
            'Name':ConstructorDeNota.Name,
            'Father': RepoDeNotas,
        })
    }

    return (
        <form className="row justify-content-center" style={{height: '100%' , width: '100%'}} onSubmit={(e) => {e.preventDefault() ; cargarNota()}}>
            <input type="text" className='InputNombre col-12' value={ConstructorDeNota.Name} placeholder='nombre' name="name" onChange={(e) => cargaDeNombre(e.target.value)}/>
            <textarea className='TextTareaText col-12' value={ConstructorDeNota.Text} name="text" placeholder='nota' onChange={(e) => cargaDeText(e.target.value)}/>
            <button className='btn col-3' style={{backgroundColor: 'red' ,color: 'white'}} type="submit">{funcion === 1 ? 'Crear Nueva Nota' : 'Editar'}</button>
        </form>
    )
}

export default NewNota;