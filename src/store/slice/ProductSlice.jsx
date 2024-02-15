import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllAsyncProducts = createAsyncThunk ('json/getAllProducts', async (limit, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}`
      /* ,
         {
          method: 'POST',
          body: JSON.stringify(post),
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
        }  */
      ).then(
        (data) => data.json()
      );
     // const data = await response.json();
     // console.log(response.products);
      return response.products
    } catch (err) {
      console.log('err');
      return rejectWithValue('Opps there seems to be an error')
    } 
});

const initialState = {
    item: [],
    message: null,
    loading: false,
    error: null,
}

const ProductSlice = createSlice ({
    name: "product",
    initialState: initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(fetchAllAsyncProducts.pending, (state)=>{
            state.loading = true
        }),
        builder.addCase(fetchAllAsyncProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.item = action.payload;
        }),
        builder.addCase(fetchAllAsyncProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        
    }
    
});

export default ProductSlice.reducer;
