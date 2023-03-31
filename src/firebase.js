import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpNLb5jTzpe4PQCULk5OOrvoZA_pVK0A0",
  authDomain: "anon-b17c3.firebaseapp.com",
  projectId: "anon-b17c3",
  storageBucket: "anon-b17c3.appspot.com",
  messagingSenderId: "791489347443",
  appId: "1:791489347443:web:e3f7c6155fa6424a864f06",
  measurementId: "G-DYDC8LDBVP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const fbProvider = new FacebookAuthProvider();
