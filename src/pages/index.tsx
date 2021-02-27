import Head from 'next/head'
import Router from 'next/router'
import { signIn, useSession } from 'next-auth/client'
import { FaGithub } from 'react-icons/fa'

import styles from '../styles/pages/Landing.module.css'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  const [session] = useSession()

  if (session) {
    Router.push('/home')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Move.it || Acesse nossa Plataforma</title>
      </Head>

      <div className={styles.landingBox}>
        <div>
          <img src="/logo.svg" alt="Move.it" />

          <div className={styles.loginContent}>
            <h2>Bem-vindo</h2>
            <p>Entre com</p>
            <button type="button" onClick={() => signIn()}>
              <FaGithub size={26} />
              GITHUB
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
