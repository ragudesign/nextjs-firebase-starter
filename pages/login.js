import Head from "next/head"
import { auth, provider, signInWithPopup } from '../firebase'

function login() {

    const popup = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = provider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                // const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = provider.credentialFromError(error);
                // ...
            });
    }


    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <h1>Login</h1>
            <button onClick={popup}>Log in</button>
        </>

    )
}

export default login