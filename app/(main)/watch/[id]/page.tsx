import { getVideoById } from '@/lib/videos'
import Container from '@/app/components/Container/Container';
import cx from '@/utils/cx';
import Player from '@/app/components/Player/Player';
import styles from './page.module.css'

export const revalidate = 10

export default async function Page({ params }: { params: { id: string }}) {
  const videos = await getVideoById(params.id)

  const {
    title,
    publishTime,
    description,
    channelTitle,
    statistics
  } = videos[0] || {}

  return <Container className={styles.container} tag="section">
    {!videos || videos.length === 0 ? (
      <div>Video not found!</div>
    ) : (
      <>
        <Player id={params.id} autoPlay={1} />

        <div className={styles.information}>
          <div>
            <p className={styles.publishTime}>{publishTime}</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <div>
            <p className={cx(styles.subText, styles.subTextWrapper)}>
              <span className={styles.textColor}>Cast: </span>
              <span className={styles.channelTitle}>{channelTitle}</span>
            </p>
            <p className={cx(styles.subText, styles.subTextWrapper)}>
              <span className={styles.textColor}>View Count: </span>
              <span className={styles.channelTitle}>{statistics?.viewCount}</span>
            </p>
          </div>
        </div>
      </>
    )}
  </Container>
}