import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isIntro:true
}

export const Intro =  createReducer(initialState,{
        done:(state)=>{
            state.isIntro = false;
        }
})