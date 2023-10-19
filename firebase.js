
import { initializeApp } from "firebase/app";
import SecuredData from "./SecuredData";
import {GoogleAuthProvider, getReactNativePersistence, initializeAuth} from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: SecuredData.FIREBASE_APIKEY,
  authDomain: SecuredData.FIREBASE_AUTHDOMAIN,
  projectId: SecuredData.FIREBASE_PROJECTID,
  storageBucket: SecuredData.FIREBASE_STORAGEBUCKET,
  messagingSenderId: SecuredData.FIREBASE_MESSAGINGSENDERID,
  appId: SecuredData.FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,{
  persistence:getReactNativePersistence(AsyncStorage)
});
const googleProvider = new GoogleAuthProvider();
const db = getDatabase(app)

export {auth,googleProvider,db};