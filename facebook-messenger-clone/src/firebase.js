import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFOw2hqcchGxjgmQBhtBydwmjnSuPXUuI",
    authDomain: "facebook-messenger-clone-259e6.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-259e6.firebaseio.com",
    projectId: "facebook-messenger-clone-259e6",
    storageBucket: "facebook-messenger-clone-259e6.appspot.com",
    messagingSenderId: "567302563787",
    appId: "1:567302563787:web:27a5cc3a33f823017af84e",
    measurementId: "G-FDTMQRXCLP"
});

const db = firebaseApp.firestore();

export default db;