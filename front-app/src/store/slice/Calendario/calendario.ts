import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Marcas } from '../../../react-app-env'

export const CalendarioSlice = createSlice({
  name: 'calendario',
  initialState: {
    calendario: [{
        id:0,
        Id_dias:0,
        Id_mes:0,
        Nombre:'',
        Id_user:0,
    },]
  },
  reducers: {
    setCalendario: (state , action: PayloadAction<Marcas[]>) =>{
        state.calendario = action.payload
    },
  },
})

export const {setCalendario} = CalendarioSlice.actions

export default CalendarioSlice.reducer