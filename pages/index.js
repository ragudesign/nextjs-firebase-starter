import Head from 'next/head'
import { auth, signOut } from '../firebase'
import styles from '../styles/Home.module.css'

export default function Home() {

  const logOff = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Firebase Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Logged in content</h1>

      <button onClick={logOff}>Sign out</button>

    </div>
  )
}