import { configureStore } from "@reduxjs/toolkit";
import succesReducer from "./features/RegisterSlice";
import accountReducer from "./features/accountSlice"

export  const store = configureStore(
    {
        reducer:{
        succes : succesReducer, 
        account : accountReducer, 
        }
    }
)