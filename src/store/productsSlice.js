import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
      const response = await axios.get('https://dummyjson.com/products')
      return response.data
})

const productsSlice = createSlice({
  name: 'products',
  initialState: {
      products: [],
      isLoading: false,
      error: null,       
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.error = null
      state.isLoading = true;
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
    })
  }
})

export const productsReducer = productsSlice.reducer;