
import {configureStore} from "@reduxjs/toolkit"
import addBookReducer from "./addBookSlice"
const appStore=configureStore({
  reducer:{addBook:addBookReducer}
})

export default appStore;