import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWUdoKCEdEsCccknXi1vXH8yqabWXAStk",
  authDomain: "sagift-relief.firebaseapp.com",
  projectId: "sagift-relief",
  storageBucket: "sagift-relief.appspot.com",
  messagingSenderId: "1002990881584",
  appId: "1:1002990881584:web:e4b683bfc0e2769d2596f5",
  measurementId: "G-475ZBSQJ8Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);