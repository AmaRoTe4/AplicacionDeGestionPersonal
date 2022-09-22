import { configureStore } from '@reduxjs/toolkit'
import IdSlice from './slice/Id/id' 
import PathSlice from './slice/path/path' 

export const store = configureStore({
  reducer: {
    id_user:IdSlice,
    path:PathSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch