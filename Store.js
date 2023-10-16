import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { Auth } from "./Reducers/AuthReducer";
import { Intro } from "./Reducers/IntroReducer";
import { FavReducer } from "./Reducers/FavReducer";


const rootReducer = combineReducers({
    auth:Auth,
    intro:Intro,
    fav:FavReducer
})

const store = configureStore({
    reducer:persistReducer({
        key:'root',
        version:2,
        storage
    },rootReducer)
})

export default store;