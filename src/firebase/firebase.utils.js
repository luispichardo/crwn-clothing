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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
