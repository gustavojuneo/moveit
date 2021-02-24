import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="./icons/body.svg" alt="Faça uma caminhada" />
            <strong>Exercite-se</strong>
            <p>
              É agora, bora lá meu parça. Caminhe por 3 minutos e estique suas
              pernas pra você ficar saudável.
            </p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="./icons/level-up.svg" alt="Level Up" />
            Complete-os e ganhe experiência e avance de level.
          </p>
        </div>
      )}
    </div>
  )
}
