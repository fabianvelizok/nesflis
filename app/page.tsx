import styles from './page.module.css'
import Banner from '@/app/components/Banner/Banner'
import Card from '@/app/components/Card/Card'
import Cards from '@/app/components/Cards/Cards'
import { searchVideosByQuery, getMostPopularVideos } from '@/lib/videos'

export default async function Home() {
  const [disneyVideos, travelVideos, productivityVideos, popularVideos] = await Promise.all([
    searchVideosByQuery('disney trailer'),
    searchVideosByQuery('traveling'),
    searchVideosByQuery('productivity'),
    getMostPopularVideos(),
  ])

  return (
    <div className={styles.home}>
      <Banner title="Banner title" subtitle="Banner subtitle" imageUrl="/static/clifford.webp" />

      <Cards title="Disney">
        {disneyVideos.map((video, idx) => (
          <Card key={idx} imageUrl={video.imageUrl} size="large" />
        ))}
      </Cards>
  
      <Cards title="Travel">
        {travelVideos.map((video, idx) => (
          <Card key={idx} imageUrl={video.imageUrl} size="small" />
        ))}
      </Cards>

      <Cards title="Productivity">
        {productivityVideos.map((video, idx) => (
          <Card key={idx} imageUrl={video.imageUrl} size="medium" />
        ))}
      </Cards>

      <Cards title="Popular">
        {popularVideos.map((video, idx) => (
          <Card key={idx} imageUrl={video.imageUrl} size="small" />
        ))}
      </Cards>
    </div>
  )
}
