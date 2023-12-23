import Container from '@/app/components/Container/Container';

import cx from '@/utils/cx';
import { getVideoById } from '@/lib/videos'
import styles from './page.module.css'

export default async function Page({ params }: { params: { id: string }}) {
  const videos = await getVideoById(params.id)

  const iframeURL = `https://www.youtube.com/embed/${params.id}?autoplay=0&origin=http://example.com&controls=0&rel=1`
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
        <div className={styles.playerWrapper}>
          <iframe
            className={styles.player}
            type="text/html"
            src={iframeURL}
            allowFullScreen
            frameBorder="0"
          />
        </div>

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