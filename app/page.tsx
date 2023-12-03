import styles from './page.module.css'
import Banner from '@/app/components/Banner/Banner'
import Navbar from '@/app/components/Navbar/Navbar'
import Card from '@/app/components/Card/Card'
import Cards from '@/app/components/Cards/Cards'

export default function Home() {
  const fakeCards = new Array(6).fill('')
  return (
    <main className={styles.main}>
      <Navbar username="fabianvelizok" />

      <Banner title="Banner title" subtitle="Banner subtitle" imageUrl="/static/clifford.webp" />

      <Cards title="Small Cards">
        {fakeCards.map((_, idx) => (
          <Card key={idx} imageUrl="/static/not-existing-image.webp" size="small" />
        ))}
      </Cards>

      <Cards title="Medium Cards">
        {fakeCards.map((_, idx) => (
          <Card key={idx} imageUrl="/static/clifford.webp" size="medium" />
        ))}
      </Cards>

      <Cards title="Large Cards">
        {fakeCards.map((_, idx) => (
          <Card key={idx} imageUrl="/static/clifford.webp" size="large" />
        ))}
      </Cards>
    </main>
  )
}
