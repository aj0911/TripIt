import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import { Auth } from "./Reducers/AuthReducer";
import { Intro } from "./Reducers/IntroReducer";
import { FavReducer } from "./Reducers/FavReducer";


const rootReducer = combineReducers({
    auth:Auth,
    intro:Intro,
    fav:FavReducer
})

const store = configureStore({
    reducer:rootReducer
})

export default store;