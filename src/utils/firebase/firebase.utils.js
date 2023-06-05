import { initializeApp } from 'firebase/app';
import { 
      getAuth,
      signInWithRedirect,
      signInWithPopup,
      GoogleAuthProvider
       } from 'firebase/auth'

import {
       getFirestore,
       doc,
       getDoc,
       setDoc
} from 'firebase/firestore'
 
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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>
   signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider);

   export const db = getFirestore();

   export const createUserDocumentfromAuth = async (userAuth) => {
     const userDocRef = doc(db, 'users', userAuth.uid);


     const userSnapshot = await getDoc(userDocRef);

   if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
   
   try {
    await setDoc(userDocRef , {
        displayName,
        email,
        createdAt
    });
    } catch(error) {
        console.log('error creating the user',error.message);
    }
    } 
   return userDocRef;

   }


  






