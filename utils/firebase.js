// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyG4Y1r2O46HUDMNqutZBX_U3SXn-jC7U",
    authDomain: "infuture-56121.firebaseapp.com",
    databaseURL: "https://infuture-56121-default-rtdb.firebaseio.com",
    projectId: "infuture-56121",
    storageBucket: "infuture-56121.appspot.com",
    messagingSenderId: "742889219681",
    appId: "1:742889219681:web:dd46f8eaa12bdaeec7ec20",
    measurementId: "G-L70K1DRSRW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
