// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDtf4RN2AbXNAhIw8NjKhNEVE_hZPBB1D4",
    authDomain: "santhosh-praythnam.firebaseapp.com",
    databaseURL: "https://santhosh-praythnam-default-rtdb.firebaseio.com",
    projectId: "santhosh-praythnam",
    storageBucket: "santhosh-praythnam.appspot.com",
    messagingSenderId: "374130533177",
    appId: "1:374130533177:web:4b0c19e8f88eab279f7ee8",
    measurementId: "G-0W1Y7SHXBS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
