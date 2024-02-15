/*import { configureStore } from "@reduxjs/toolkit";
import cartSlicReeducer from "./slice/cartSlice";
//import rootReducer from './reducer'

 const store = configureStore ({
    reducer: {
        allcart: cartSlicReeducer

    }
}) */

import cartSlicReeducer from "./slice/cartSlice";
import categorySliceReducer from "./slice/CategorySlice";
import productSliceReducer from "./slice/ProductSlice";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultMiddlewareConfig = {
  serializableCheck: false
};

  const store = configureStore({
    reducer: {
      allcart: cartSlicReeducer,
      allCategory: categorySliceReducer,
      allProduct: productSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(defaultMiddlewareConfig),
  });
export default store