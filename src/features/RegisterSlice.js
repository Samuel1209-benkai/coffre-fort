import { createSlice } from "@reduxjs/toolkit";

 const succesSlice = createSlice(
    {
        name:"succes",
        initialState :{
            isSignIn : false, 
        },
        reducers :{
            isSucces:(state,action)=>{
                state.isSignIn = true;
            },
            isFailled : (state,action)=>{
                state.isSignIn=false;
            }
        }
    }
);

export const {isSucces , isFailled} = succesSlice.actions;

export default succesSlice.reducer 