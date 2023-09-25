// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore"

const vapidKey = "BCOsmBzW_V8G7khb2URk5Lt9wIu_ruuyDGhyVa-Br9Ook1i-r17iNsSysIyHPxvNGTht8pDs5ARSxNrKokamdoI";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-XkQD8G1X2dC8mJdO1aQsk1Qt1wyJeXc",
    authDomain: "fir-shopping-cf46e.firebaseapp.com",
    projectId: "fir-shopping-cf46e",
    storageBucket: "fir-shopping-cf46e.appspot.com",
    messagingSenderId: "895331878610",
    appId: "1:895331878610:web:989111fdc8f5359d25cf0b"
};

// currentToken = "dCWPMd1AjKfD2wj7B6VcEn:APA91bFKy6Dki78SqKQXvRDelyvNEt4WQVeNJzBY082VGNDcQWf3XTARD4R9FUl7wER6Thft1EvcY13abIhlPOsVdducv942mIbBNIpxukOKnCyXpMIDdNQidWdw8cAdmLBxNlUp_Gmq";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
getToken(messaging, { vapidKey })
    .then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            // console.log('currentToken', currentToken);
            sendTokenToServer(currentToken);
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }})
    .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });

const sendTokenToServer = token => {
    if(localStorage.getItem('tokenSentToServer')) return;
    // TODO: Implement the logic to save the token on the server
    console.log('The token is saved');
    localStorage.setitem('tokenSentToServer', '1');
}

export const db = getFirestore();
