import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBjLc4FImnGwe64lzn9ANhRPvLWmswSFqc",
    authDomain: "ecommerce-el-arca-de-noe.firebaseapp.com",
    projectId: "ecommerce-el-arca-de-noe",
    storageBucket: "ecommerce-el-arca-de-noe.appspot.com",
    messagingSenderId: "118937479754",
    appId: "1:118937479754:web:9c690000d34980432d54b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)