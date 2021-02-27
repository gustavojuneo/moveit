import Link from 'next/link'
import { signOut } from 'next-auth/client'
import { FaSignOutAlt } from 'react-icons/fa'
import { BiHomeAlt } from 'react-icons/bi'
import { FiAward } from 'react-icons/fi'

import styles from '../styles/components/Navbar.module.css'

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <header>
        <img src="/logo-icon.svg" alt="Move.it" />
      </header>
      <nav>
        <ul>
          <li>
            <Link href="/home">
              <a className={styles.active}>
                <BiHomeAlt size={36} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard">
              <a>
                <FiAward size={36} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <footer>
        <button type="button" onClick={() => signOut()}>
          Sair
          <FaSignOutAlt />
        </button>
      </footer>
    </div>
  )
}
