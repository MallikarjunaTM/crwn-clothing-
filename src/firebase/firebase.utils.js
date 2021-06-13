import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqQLf5F2OJH4Hwxsvn9umqLdXSCEk2vIw",
    authDomain: "crwn-db-85d4e.firebaseapp.com",
    projectId: "crwn-db-85d4e",
    storageBucket: "crwn-db-85d4e.appspot.com",
    messagingSenderId: "528971293268",
    appId: "1:528971293268:web:c0f3608b50da11c8e983c1",
    measurementId: "G-NVEHY6D4W1"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments =async (collectionKey, objectsToAdd)=>{
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj=>{
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
  })
  
  return await batch.commit();

}

export const convertCollectionSnapshotToMap =(collections)=>{
  const transformedcollection = collections.docs.map(doc=>{
    const {title,items} = doc.data();
    return{
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })
  return transformedcollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  } , {})
}

export const getCurrentUser = () => {
  return new Promise((resolve,reject)=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;