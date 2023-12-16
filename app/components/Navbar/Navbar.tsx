import Image from "next/image"
import Link from "next/link"
import Container from "../Container/Container"
import styles from './Navbar.module.css'

type NavbarProps = {
  username?: string,
  isLoggedIn: boolean
}

const Navbar = ({ username, isLoggedIn }: NavbarProps) => {
  return <Container className={styles.container}>
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link href={'/'}>
            <Image
              className={styles.logo}
              src="/static/netflix.svg"
              alt="Netflix logo"
              width={128}
              height={34}
            />
          </Link>
        </li>
        {isLoggedIn && <>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/browse/my-list'}>My List</Link>
          </li>
        </>}
      </ul>
    </nav>

    <ul className={styles.userInfoList}>
      {
        isLoggedIn ? <>
          <li>{username ?? 'Unknown'}</li>
          <li><Link href="/logout">Sign out</Link></li>
        </> : <>
          <li><Link href="/login">Sign in</Link></li>
        </>
      }
    </ul>
  </Container>
}

export default Navbar

