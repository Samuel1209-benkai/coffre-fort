import { createSlice } from "@reduxjs/toolkit";

 const accountSlice = createSlice(
    {
        name:"account",
        initialState :{
            Account : false, 
        },
        reducers :{
            haveAccount:(state,action)=>{
                state.Account = true;
            },
            noHaveAccount : (state,action)=>{
                state.Account=false;
            }
        }
    }
);

export const {haveAccount , noHaveAccount} = accountSlice.actions;

export default accountSlice.reducer 