import { createSlice } from '@reduxjs/toolkit';

export const favSlice = createSlice({
    name: "FavReducer",
    initialState:  [],
    reducers: {
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
    },
});

export const FavReducer =  favSlice.reducer;
export const {addFav} = favSlice.actions;