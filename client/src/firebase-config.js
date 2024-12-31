// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyClQePt4KwRcr5EcefkGEDMzWcQdnwN7nc" ,
  authDomain: "bytewithdenny.firebaseapp.com",
  projectId: "bytewithdenny",
  storageBucket: "bytewithdenny.firebasestorage.app",
  messagingSenderId: "455943667602",
  appId: "1:455943667602:web:474df83020dba52a4e4b4b",
  measurementId: "G-WZJDV9EKVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth()