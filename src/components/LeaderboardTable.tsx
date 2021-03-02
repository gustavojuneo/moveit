import { useEffect, useState } from 'react'
import axios from 'axios'

import styles from '../styles/components/LeaderboardTable.module.css'

export function LeaderboardTable() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/users').then(response => {
      setUsers(response.data.users)
    })
  }, [])

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Usuário</th>
            <th>Desafios</th>
            <th>Experiência</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>0</td>
              <td className={styles.profile}>
                <img src={user.image} alt={user.name} />
                <div>
                  <span className={styles.userName}>{user.name}</span>
                  <span>
                    <img src="/icons/level.svg" alt={`Level de ${user.name}`} />
                    Level {user.level}
                  </span>
                </div>
              </td>
              <td>{user.level} completados</td>
              <td>{user.experience} xp</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
