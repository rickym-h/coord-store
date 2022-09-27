import './App.css';

import {auth, mySignIn, mySignOut} from './firebase-code';


import {useAuthState} from "react-firebase-hooks/auth";

function authenticateWithGoogle() {
    mySignIn()
}

function signOutFunction() {
    mySignOut()
}


function App() {
    const [user] = useAuthState(auth);

    return user ? <SignOut user={user}/> : <SignIn user={user}/>;
}

function SignOut(props) {
    console.log(props.user)
    return (
        <main>
            <button onClick={signOutFunction}>Sign Out</button>
            <br/>
            SIGNED IN AS {props.user.displayName}
            <br/>
            USER ID:  {props.user.uid}
        </main>
    )
}

function SignIn(props) {
    return (
        <main>
            <button onClick={authenticateWithGoogle}>Sign In With Google</button>
            <br/>
            NO USER
        </main>
    )
}

export default App;
