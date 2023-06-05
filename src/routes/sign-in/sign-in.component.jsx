import {userEffect} from 'react';
import { getRedirectResult } from 'firebase/auth';


import { 
    auth,
    signInWithGooglePopup ,
    signInWithGoogleRedirect,
     createUserDocumentfromAuth, 
    } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

   const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentfromAuth(user);


   }

   const logGoogleRedirectUser = async () => {
    const {user} = await signInWithGoogleRedirect();
    

   }

    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <button onClick={logGoogleRedirectUser}>
                Sign In with Google Redirect
            </button>
        </div>
    );
};

export default SignIn;