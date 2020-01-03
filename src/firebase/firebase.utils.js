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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;