import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchproducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await axios.get("https://test.gs-lafondation.com/api/tables")
      return response.data
    }
  )



export const ProductsSlice = createSlice({
  name: 'products',
  initialState :{
data:[],
status:null,
  },
  reducers: {
   
  },
  extraReducers :{
    [fetchproducts.fulfilled]:(state,{payload})=>{
        state.data=payload;
        state.status="succes";
      },
      [fetchproducts.pending]:(state)=>{
        state.status="loading";
      },
      [fetchproducts.rejected]:(state)=>{
        state.status="failed";
      },
  }
})



export default ProductsSlice.reducer