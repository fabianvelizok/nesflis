import styles from './page.module.css'
import Banner from '@/app/components/Banner/Banner'
import Navbar from '@/app/components/Navbar/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar username="fabianvelizok" />

      <Banner title="Banner title" subtitle="Banner subtitle" imageUrl="/static/clifford.webp" />
    </main>
  )
}
