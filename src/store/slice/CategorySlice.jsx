import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllCategories = createAsyncThunk ('json/getAllCategories', async (post, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories"
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
     // console.log(response);
      return response
    } catch (err) {
      console.log('err');
      return rejectWithValue('Opps there seems to be an error')
    } 
});

const initialState = {
    categories: [],
    message: null,
    loading: false,
    error: null,
}

const CategorySlice = createSlice ({
    name: "allcategory",
    initialState: initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.pending, (state)=>{
            state.loading = true
        }),
        builder.addCase(getAllCategories.fulfilled, (state, action)=>{
            state.loading = false;
            state.categories = action.payload;
        }),
        builder.addCase(getAllCategories.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        
    }
    
});
console.log(CategorySlice.actions);

 //export const getAllProductsSlice = (state) => state.allcart.item;
 export default CategorySlice.reducer;
