
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyB9SlFuKliectnEhuqNCZfzwN_dlA2lKEA",
    authDomain: "practice-49494.firebaseapp.com",
    projectId: "practice-49494",
    storageBucket: "practice-49494.firebasestorage.app",
    messagingSenderId: "233356380337",
    appId: "1:233356380337:web:e5345070dd3c00c284fa90",
    measurementId: "G-1NQBRTDFVR"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)