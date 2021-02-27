import Head from 'next/head'
import { FaGithub } from 'react-icons/fa'

import styles from '../styles/pages/Landing.module.css'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move.it || Leaderboard</title>
      </Head>

      <h1>Hello Leaderboard</h1>
    </div>
  )
}
