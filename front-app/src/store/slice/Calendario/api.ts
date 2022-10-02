import {setCalendario} from "./calendario"
import axios from 'axios'
import { Marcas } from "../../../react-app-env"

export const getCalendario = () => {
    const id_user = process.env.REACT_APP_ID ? parseInt(process.env.REACT_APP_ID) : 0
    const Path = 'https://servidordepaginagp-production.up.railway.app/' 

    return async (dispatch:any, getState:any) => {
        const obj = await axios.get(Path + 'Fechas/')
        let notasAux:Marcas[] = obj.data.filter((n:Marcas) => 
            n.Id_user === id_user 
        )
        const retorno:Marcas[] = notasAux.map((n:any)=> {
            return {
                id: n.id,
                Id_dias: n.Id_dias,
                Id_mes: n.Id_mes,
                Nombre: n.Nombre,
                Id_user: n.Id_user, 
            }
        })
        dispatch(setCalendario(
            retorno
        ))
    } 
}
