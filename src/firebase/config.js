// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyApsRRq3rbsCMeiE6wuaBoUDnlKSogQeuA",
    authDomain: "practica-react-53e76.firebaseapp.com",
    databaseURL: "https://practica-react-53e76-default-rtdb.firebaseio.com",
    projectId: "practica-react-53e76",
    storageBucket: "practica-react-53e76.appspot.com",
    messagingSenderId: "833451597199",
    appId: "1:833451597199:web:1dc8b27299135600a4bffa",
    measurementId: "G-E0LG57YQXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();