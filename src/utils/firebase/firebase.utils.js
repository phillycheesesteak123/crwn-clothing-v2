import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyA6wKrmvu8Q8L2d_V3fzPCBzS5DRKZVdd8",

    authDomain: "crwn-clothing-68a5f.firebaseapp.com",

    projectId: "crwn-clothing-68a5f",

    storageBucket: "crwn-clothing-68a5f.appspot.com",

    messagingSenderId: "898342567021",

    appId: "1:898342567021:web:5ae991143f7a24663f5364",

    measurementId: "G-G85K97EQN6"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users' , userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
}