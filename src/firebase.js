// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzA3Hl9LFOSGr18DtnDJfDXEayz0OJ3FA",
    authDomain: "clone-eec7a.firebaseapp.com",
    projectId: "clone-eec7a",
    storageBucket: "clone-eec7a.appspot.com",
    messagingSenderId: "391997966679",
    appId: "1:391997966679:web:36cc5eca89a796c688d612",
    measurementId: "G-M94C5VM2T4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};

