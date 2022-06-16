import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", //state 이름
  initialState: { name: "kim", age: 20 },
  reducers: {
    agePlusOne(state, a) {
      state.age += a.payload;
    },
  },
});
export let { changeName } = user.actions;
export let { agePlusOne } = user.actions;
let cart = createSlice({
  name: "cart", //state 이름
  initialState: [
    { id: 0, title: "White and Black", count: 2 },
    { id: 2, title: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plusStock(state, action) {
      state[action.payload].count += 1;
    },
    minusStock(state, action) {
      if (state[action.payload].count >= 1) {
        state[action.payload].count -= 1;
      }
    },
    addProductIntoCart(state, action) {
      state.push(action.payload);
    },
  },
});

export let { plusStock } = cart.actions;
export let { minusStock } = cart.actions;
export let { addProductIntoCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
