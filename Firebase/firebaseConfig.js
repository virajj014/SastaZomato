import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDcfYKWdZqhL8bzg2v4yaYUqwcd3PSTHDY",
    authDomain: "foodapp2-2b58b.firebaseapp.com",
    projectId: "foodapp2-2b58b",
    storageBucket: "foodapp2-2b58b.appspot.com",
    messagingSenderId: "328180707420",
    appId: "1:328180707420:web:6c8b36ac3b1a3716cc7699"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }