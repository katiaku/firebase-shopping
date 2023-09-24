importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyC-XkQD8G1X2dC8mJdO1aQsk1Qt1wyJeXc",
    authDomain: "fir-shopping-cf46e.firebaseapp.com",
    projectId: "fir-shopping-cf46e",
    storageBucket: "fir-shopping-cf46e.appspot.com",
    messagingSenderId: "895331878610",
    appId: "1:895331878610:web:989111fdc8f5359d25cf0b"
});

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'
//     };
    
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });
