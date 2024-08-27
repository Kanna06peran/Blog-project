// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCkOu2bdjjQjtOkcZWCcPuGj014s8daO9Q",
  authDomain: "blog-app-2cc0e.firebaseapp.com",
  projectId: "blog-app-2cc0e",
  storageBucket: "blog-app-2cc0e.appspot.com",
  messagingSenderId: "503255417059",
  appId: "1:503255417059:web:b812052cc4da79ec4645d6",
  measurementId: "G-VNKHH5M68Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth