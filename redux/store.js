import { configureStore } from '@reduxjs/toolkit'
import percentageReducer from './percentage-places'

export const store = configureStore({
  reducer: {
    percentage: percentageReducer
  }
})

export default store
