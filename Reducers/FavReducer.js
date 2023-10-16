import { createReducer } from "@reduxjs/toolkit";

const initialState = []
export const FavReducer =  createReducer(initialState,{
        addFav:(state,{payload})=>{
            if(state.length===0){
                state.push({
                    user:payload.user,
                    hotels:[payload.hotel]
                })
            }
            else{
                let isFound = false;
                for(let i=0;i<state.length;i++){
                    if(state[i].user.email === payload.user.email){
                        state[i].hotels.push(payload.hotel);
                        isFound = true;
                    }
                }
                if(!isFound){
                    state.push({
                        user:payload.user,
                        hotels:[payload.hotel]
                    })
                }
            }
            // console.log(state)
        }
})