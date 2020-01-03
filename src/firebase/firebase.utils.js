import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCENsc6zOPmaJlOvs3AvrNJ3GrG_5cs4iw",
  authDomain: "crwn-db-53bac.firebaseapp.com",
  databaseURL: "https://crwn-db-53bac.firebaseio.com",
  projectId: "crwn-db-53bac",
  storageBucket: "crwn-db-53bac.appspot.com",
  messagingSenderId: "1078836387137",
  appId: "1:1078836387137:web:638a789d52622959a415c0",
  measurementId: "G-SJ9M5SH4YP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;