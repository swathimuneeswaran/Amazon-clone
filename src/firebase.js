import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9oikS6sVhqkuuMqhETKMcqKfopDSYX1M",
  authDomain: "challenge-41b28.firebaseapp.com",
  projectId: "challenge-41b28",
  storageBucket: "challenge-41b28.appspot.com",
  messagingSenderId: "768577347632",
  appId: "1:768577347632:web:190924c3b50a2bc1f08df5",
  measurementId: "G-8PKY6QL4QW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };