import { useContext } from 'react'
import { useSession, getSession } from 'next-auth/client'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

interface Profile {
  email?: string
  image?: string
  name?: string
}

interface ProfileProps {
  profile: Profile
}

export function Profile({ profile }: ProfileProps) {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src={profile.image} alt={profile.name} />
      <div>
        <strong>{profile.name}</strong>
        <p>
          <img src="./icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
