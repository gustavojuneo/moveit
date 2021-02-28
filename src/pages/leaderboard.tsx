import Head from 'next/head'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { signOut, useSession, getSession } from 'next-auth/client'
import { useEffect } from 'react'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountdownProvider } from '../contexts/CountdownContext'
import { CountDown } from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox'
import { Navbar } from '../components/Navbar'

import styles from '../styles/pages/Home.module.css'

interface User {
  name: string
  email: string
  image: string
}

interface Session {
  user: User
  expires: string
}

interface HomeProps {
  session?: Session
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  if (!session) {
    useEffect(() => {
      setTimeout(() => {
        Router.push('/')
      }, 1000)
    }, [])
  }

  if (session) {
    return (
      <div className={styles.dashboard}>
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <div className="aside">
          <Navbar />
        </div>

        <div className={styles.container}>
          <h1>Leaderboard</h1>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.accessDenied}>
      <h1>Acesso negado!</h1>
      <p>Você será redirecionado em alguns instantes.</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)
  return {
    props: {
      session
    }
  }
}
