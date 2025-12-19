import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    showCart: false,
    notification: null
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            const quantityToAdd = newItem.quantity || 1;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    img1: newItem.img1,
                    quantity: quantityToAdd,
                    totalPrice: parseFloat(newItem.price.replace('$', '')) * quantityToAdd
                });
            } else {
                existingItem.quantity += quantityToAdd;
                existingItem.totalPrice += parseFloat(newItem.price.replace('$', '')) * quantityToAdd;
            }
            state.totalQuantity += quantityToAdd;
            // state.showCart = true; // Removed to prevent sidebar from opening automatically
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        closeCart(state) {
            state.showCart = false;
        },
        openCart(state) {
            state.showCart = true;
        },
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.showCart = false;
        },
        showNotification(state, action) {
            state.notification = action.payload;
        },
        hideNotification(state) {
            state.notification = null;
        }
    }
});

export const { addToCart, removeFromCart, toggleCart, closeCart, openCart, clearCart, showNotification, hideNotification } = cartSlice.actions;
export default cartSlice.reducer;
