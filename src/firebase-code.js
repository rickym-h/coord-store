
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDryt2rf3Oiecrm8hb2JM-u_bdSbxFZuu0",
    authDomain: "coord-storage.firebaseapp.com",
    projectId: "coord-storage",
    storageBucket: "coord-storage.appspot.com",
    messagingSenderId: "687955603413",
    appId: "1:687955603413:web:ffcd5056d267187292175c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialise Authentication
const auth = getAuth(app)


// functions to sign in and out

function mySignIn() {
    console.log("Attempting sign in...")
    signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {

        })
}

function mySignOut() {
    signOut(auth).then((result)=> {

    })
}

export {
    auth,
    mySignIn,
    mySignOut
}