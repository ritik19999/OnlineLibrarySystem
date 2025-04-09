import { createSlice } from "@reduxjs/toolkit";
import Books from "./booksData";


const addBookSlice=createSlice({
  name:"addBook",
  initialState:{
    items:Books
  },
  reducers:{
addItem:(state,action)=>{
  state.items.push(action.payload);
}
  }
})

export const {addItem}=addBookSlice.actions;
export default addBookSlice.reducer;