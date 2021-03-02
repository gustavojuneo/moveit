import Head from 'next/head'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/client'
import { useEffect } from 'react'

import { Navbar } from '../components/Navbar'
import { LeaderboardTable } from '../components/LeaderboardTable'

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
          <LeaderboardTable />
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
