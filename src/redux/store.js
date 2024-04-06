import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from './counterSlice'

export const store = configureStore({
  reducer: {
    table:ProductsSlice,
  },
})
