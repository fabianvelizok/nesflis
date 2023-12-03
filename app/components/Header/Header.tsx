import { ReactNode } from 'react'

import Navbar from '../Navbar/Navbar';
import cx from '@/utils/cx';
import styles from './Header.module.css'

type HeaderProps = {
  className?: string
  username: string
}

const Header = ({ className, username }: HeaderProps) => <header className={cx(styles.header, className)}>
  <Navbar username={username} />
</header>

export default Header