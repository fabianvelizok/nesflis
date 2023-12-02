import Image from "next/image"
import Link from "next/link"
import Container from "../Container/Container"
import styles from './Navbar.module.css'

type NavbarProps = {
  username: string
}

const Navbar = ({ username }: NavbarProps) => {
  return <div className={styles.navbar}>
    <Container className={styles.container}>
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
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>My List</Link>
          </li>
        </ul>
      </nav>

      <ul className={styles.userInfoList}>
        <li><button>{username}</button></li>
        <li><button>Sign out</button></li>
      </ul>
    </Container>
  </div>
}

export default Navbar

