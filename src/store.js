import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", //state 이름
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      return { name: "park", age: 20 };
    },
    agePlusOne(state) {
      state.age = state.age + 1;
    },
  },
});
export let { changeName } = user.actions;
export let { agePlusOne } = user.actions;
let cart = createSlice({
  name: "cart", //state 이름
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
