import * as firebase from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js';
import 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth-compat.js';
import 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore-compat.js';

import * as firebaseui from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";



let ui = new firebase.auth.AuthUI(auth);
let login = document.querySelector('.login');

const setupLoginButton = () => {
    ui.start("#loginUI", {
        callbacks:{
            signInSuccesWithAuthResult: function(authResult, redirectURL) {
                console.log(authResult);
                return false;
            }
        }, 
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    });
}

setupLoginButton();