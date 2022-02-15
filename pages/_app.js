import { useEffect } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'
import Login from './login'
import Loading from '../components/Loading/Loading'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
      },
        { merge: true }
      )
    }

  }, [user])

  if (loading) return <Loading />

  if (!user) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
