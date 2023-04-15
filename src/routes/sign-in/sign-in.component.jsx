import { signInWithGooglePopup , createUserDocumentfromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

   const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentfromAuth(user);


   }

    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
        </div>
    );
};

export default SignIn;