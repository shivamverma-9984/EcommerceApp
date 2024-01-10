import { createSlice } from "@reduxjs/toolkit";
const initialState={
  cart:[],
  quantity:0
}
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const find=state.cart.findIndex(item=>item.id==action.payload.id)
      if(find>=0){
        state.cart[index].quantity+=1
      }else{
        const temp={...action.payload,quantity:0}
        state.cart.push(temp)
      }
    },
    remove(state, action) {
      
      state.cart=state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
