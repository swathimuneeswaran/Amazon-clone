import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfaajcfCxB71dYRAsVCPdHz-1ntquElVA",
    authDomain: "clone-4890a.firebaseapp.com",
    projectId: "clone-4890a",
    storageBucket: "clone-4890a.appspot.com",
    messagingSenderId: "373242908983",
    appId: "1:373242908983:web:75e21bc089e7a5082e4ab2",
    measurementId: "G-ZN95JJJSQV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };