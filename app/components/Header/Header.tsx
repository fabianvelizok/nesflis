import { ReactNode } from 'react'

import Navbar from '../Navbar/Navbar';
import cx from '@/utils/cx';
import styles from './Header.module.css'

type HeaderProps = {
  className?: string
  username?: string
  isLoggedIn: boolean
}

const Header = ({ className, username, isLoggedIn }: HeaderProps) => <header className={cx(styles.header, className)}>
  <Navbar username={username} isLoggedIn={isLoggedIn} />
</header>

export default Header