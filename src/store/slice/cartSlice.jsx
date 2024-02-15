import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    message: null,
    loading: false,
    error: null,
}

const cartSlice = createSlice ({
    name: "allcart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            let find_index = state.cart.findIndex((item) => item.id === action.payload.id);
            //console.log('findId============'+find_index);
            if( find_index >= 0 ) {
                state.cart[find_index].quantity +=1;
            } else {
            const qty = {quantity: 1};
            const newObj = Object.assign(qty, action.payload);
            //console.log(qty);
            state.cart.push(qty);
            }
            state.totalQuantity += 1;
            state.totalPrice = state.totalPrice + action.payload.price;
        },
        minusToCart: (state, action) => {
            if ( state.cart[action.payload].quantity > 1 ) {
            state.cart[action.payload].quantity -=1;
            state.totalQuantity -= 1;
            state.totalPrice = state.totalPrice - state.cart[action.payload].price;
            } else {
                return {...state, message: "Click remove button"};
            } 
        },
        removeFromCart: (state, action) => {
            //state.cart.filter((item) => item.id !== action.payload); // action.payload must be an id
            state.totalQuantity -= state.cart[action.payload].quantity;
            const priceTotal = state.cart[action.payload].quantity * state.cart[action.payload].price;
            state.totalPrice -= parseInt(priceTotal.toFixed(2));
            state.cart.splice(action.payload, 1);
        },
        getCartTotal: (state) => {
           let {totalQuantity, totalPrice} = state.cart.reduce(
            (cartTotal, cartItem) => {
                console.log("cartTotal:", cartTotal);
                console.log("cartItem:", cartItem);
                const { price, quantity } = cartItem;
                console.log(price, quantity);
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
            },
            {
                totalPrice: 0,
                totalQuantity: 0,
            }
           );
           state.totalPrice = parseInt(totalPrice.toFixed(2));
           state.totalQuantity = totalQuantity;
        },
        clearMessage: (state) => {
            state.message = null;
        }
    },
    
});
console.log(cartSlice.actions);

 //export const getAllProductsSlice = (state) => state.allcart.item;
 export const { addToCart, minusToCart, removeFromCart, getCartTotal, clearMessage } =  cartSlice.actions;
 export default cartSlice.reducer;
