import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHomPncpXRlN1DK3C8ANVd7C8iX-FRxWk",
  authDomain: "checkapp-3f905.firebaseapp.com",
  projectId: "checkapp-3f905",
  storageBucket: "checkapp-3f905.appspot.com",
  messagingSenderId: "804396683729",
  appId: "1:804396683729:web:a42f5b026600de63a450f0",
  measurementId: "G-QKPW03S1PD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const fbProvider = new FacebookAuthProvider();
