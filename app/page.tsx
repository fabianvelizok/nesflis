import styles from './page.module.css'
import Banner from '@/app/components/Banner/Banner'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Youflix</h1>

      <Banner title="Banner title" subtitle="Banner subtitle" imageUrl="/static/clifford.webp" />
    </main>
  )
}
