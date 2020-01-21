import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDmoamxbM40xzk7zm1l70hNsE9ol_3OxdU",
  authDomain: "article-viewer.firebaseapp.com",
  databaseURL: "https://article-viewer.firebaseio.com",
  projectId: "article-viewer",
  storageBucket: "article-viewer.appspot.com",
  messagingSenderId: "817069021835",
  appId: "1:817069021835:web:076d2562ad80259518128e",
  measurementId: "G-6EPGERMQVV"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({params: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;