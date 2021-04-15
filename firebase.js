import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0bpFAM_DqPaCUjjW2tbcuwr50LSSsB0Q",
    authDomain: "wtsapp-2.firebaseapp.com",
    projectId: "wtsapp-2",
    storageBucket: "wtsapp-2.appspot.com",
    messagingSenderId: "482906120537",
    appId: "1:482906120537:web:ce18d2e7038d8843f76c48"
  };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, app }

   