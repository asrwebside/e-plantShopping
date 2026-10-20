import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a product or increase its quantity if it already exists
    addItem(state, action) {
      const product = action.payload;

      const existing = state.items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // Remove a product completely from the cart
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Update a product's quantity
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (product) => product.id === id
      );

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter(
          (product) => product.id !== id
        );
      } else {
        item.quantity = quantity;
      }
    },

    // Empty the entire cart
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;