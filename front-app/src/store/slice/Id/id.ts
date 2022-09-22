import { createSlice } from '@reduxjs/toolkit'

export const IdSlice = createSlice({
  name: 'id_user',
  initialState: {
    id_user: process.env.REACT_APP_ID ? parseInt(process.env.REACT_APP_ID) : 0,
  },
  reducers: {
    
  },
})

export default IdSlice.reducer