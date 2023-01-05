// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnHi_8WD9kDX5--ch5Y6xBA6QqzwL-u5k",
  authDomain: "crwn-clothing-v2-3c20e.firebaseapp.com",
  projectId: "crwn-clothing-v2-3c20e",
  storageBucket: "crwn-clothing-v2-3c20e.appspot.com",
  messagingSenderId: "12011230537",
  appId: "1:12011230537:web:69de96545cd6842c7c7698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth() 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch(error) {
      console.log('error creating the user', error.message)
    }
    
    return userDocRef
  }
  // if user date exists
  // Create / set the document with the data ffrom userAuth in my collection

  // if user data does not exist

  //return userDocRef
}