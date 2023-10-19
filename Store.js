import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer} from 'redux-persist'
// import storage from "redux-persist/lib/storage";
import { Auth } from "./Reducers/AuthReducer";
import { Intro } from "./Reducers/IntroReducer";
import { FavReducer } from "./Reducers/FavReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";


const rootReducer = combineReducers({
    auth:Auth,
    intro:Intro,
    fav:FavReducer
})

const store = configureStore({
    reducer:persistReducer({
        key:'root',
        version:2,
        storage:AsyncStorage
    },rootReducer),
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store;