import { createSlice } from '@reduxjs/toolkit';

export const introSlice = createSlice({
    name: "Intro",
    initialState: {
        isIntro:true
    },
    reducers: {
        done:(state)=>{
            state.isIntro = false;
        }  
    },
});

export const Intro =  introSlice.reducer;
export const {done} = introSlice.actions;

