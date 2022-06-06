// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVieFpkyUp0wNzjfwbzG57df90SHYXHnc",
  authDomain: "periwinkle-72bc8.firebaseapp.com",
  projectId: "periwinkle-72bc8",
  storageBucket: "periwinkle-72bc8.appspot.com",
  messagingSenderId: "511844486576",
  appId: "1:511844486576:web:95c6875997a1b7ea279a75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider()
const auth=getAuth()

export{app,provider,auth}