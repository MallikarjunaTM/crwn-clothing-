import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDqQLf5F2OJH4Hwxsvn9umqLdXSCEk2vIw",
    authDomain: "crwn-db-85d4e.firebaseapp.com",
    projectId: "crwn-db-85d4e",
    storageBucket: "crwn-db-85d4e.appspot.com",
    messagingSenderId: "528971293268",
    appId: "1:528971293268:web:c0f3608b50da11c8e983c1",
    measurementId: "G-NVEHY6D4W1"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;