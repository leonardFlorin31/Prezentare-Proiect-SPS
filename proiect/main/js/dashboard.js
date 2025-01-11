import { auth } from './firebase.js'; // Use the auth object you exported
import {firebaseui} from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"; // Import Firebase UI

var firebaseui = require('firebaseui');

let ui = firebaseui.auth.AuthUI(auth); // Initialize AuthUI with the Firebase Auth instance
let login = document.querySelector('.login');

const setupLoginButton = () => {
    ui.start("#loginUI", {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectURL) {
                console.log(authResult);
                return false; // Prevent redirects after sign in
            }
        },
        signInFlow: "popup", // Use a popup for the sign-in flow
        signInOptions: [firebaseui.auth.GoogleAuthProvider.PROVIDER_ID] // Google sign-in
    });
}

setupLoginButton();