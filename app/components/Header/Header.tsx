import Navbar from '../Navbar/Navbar';
import cx from '@/utils/cx';
import styles from './Header.module.css'

type HeaderProps = {
  className?: string
}

const Header = ({ className }: HeaderProps) => <header className={cx(styles.header, className)}><Navbar /></header>

export default Header