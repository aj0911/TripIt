
import { initializeApp } from "firebase/app";
import SecuredData from "./SecuredData";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'


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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

export {auth,googleProvider};