import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAokxuwReu7kxVkmRjWB6qIiv6M8vbkoFA",
    authDomain: "letmeask-72fbf.firebaseapp.com",
    databaseURL: "https://letmeask-72fbf-default-rtdb.firebaseio.com",
    projectId: "letmeask-72fbf",
    storageBucket: "letmeask-72fbf.appspot.com",
    messagingSenderId: "977639468727",
    appId: "1:977639468727:web:30587273a40d59032a6732",
    measurementId: "G-F8SKS192R4"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database()