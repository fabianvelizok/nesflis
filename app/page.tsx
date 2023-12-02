import styles from './page.module.css'
import Banner from '@/app/components/Banner/Banner'
import Navbar from '@/app/components/Navbar/Navbar'
import Card from '@/app/components/Card/Card'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar username="fabianvelizok" />

      <Banner title="Banner title" subtitle="Banner subtitle" imageUrl="/static/clifford.webp" />

      {
        new Array(6).fill('').map((_, idx) => (
          <Card key={idx} imageUrl="/static/not-existing-image.webp" size="small" />
        ))
      }
      {
        new Array(6).fill('').map((_, idx) => (
          <Card key={idx} imageUrl="/static/clifford.webp" size="medium" />
        ))
      }
      {
        new Array(6).fill('').map((_, idx) => (
          <Card key={idx} imageUrl="/static/clifford.webp" size="large" />
        ))
      }
    </main>
  )
}
