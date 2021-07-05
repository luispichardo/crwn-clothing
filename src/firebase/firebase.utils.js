import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA4Fo_vV5a7yWL_5zy3iVICArMK0pK90MY',
  authDomain: 'crwn-db-a71c8.firebaseapp.com',
  projectId: 'crwn-db-a71c8',
  storageBucket: 'crwn-db-a71c8.appspot.com',
  messagingSenderId: '119395646057',
  appId: '1:119395646057:web:0c39067d216b103eac40f8',
  measurementId: 'G-9EP9GQZVRH',
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
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user ', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
