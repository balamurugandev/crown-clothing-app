import { initializeApp } from 'firebase/app';
import { 
      getAuth,
      signInWithRedirect,
      signInWithPopup,
      GoogleAuthProvider
       } from 'firebase/auth'
 
const firebaseConfig = {
    apiKey: "AIzaSyDn-ywSPbGOxCLXsZcLJLW6xCV7mn1GShw",
    authDomain: "crwn-clothing-db-d0dba.firebaseapp.com",
    projectId: "crwn-clothing-db-d0dba",
    storageBucket: "crwn-clothing-db-d0dba.appspot.com",
    messagingSenderId: "110382596371",
    appId: "1:110382596371:web:07d231383bb9df50ef1ae6"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>
   signInWithPopup(auth, provider);


  






