// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBngM9WzjnJlyUIynUj4hnrsZr8pDZqPNI",
    authDomain: "sps-proiect.firebaseapp.com",
    projectId: "sps-proiect",
    storageBucket: "sps-proiect.firebasestorage.app",
    messagingSenderId: "1057427737243",
    appId: "1:1057427737243:web:a2cf03d75a74cba955d43e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = getFirestore(app);
let auth = getAuth(app);

export { db, auth };

