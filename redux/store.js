import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './percentage-places'

export const store = configureStore({
  reducer: {
    percentage: cartReducer
  }
})

export default store
