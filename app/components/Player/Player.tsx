import cx from '@/utils/cx';
import styles from './Player.module.css'

type PlayerProps = {
  className?: string
  id: string
  autoPlay?: 0 | 1
}

export default function Player({ className, id, autoPlay = 0 }: PlayerProps) {
  const iframeURL = `https://www.youtube.com/embed/${id}?autoplay=${autoPlay}&controls=0&rel=1`

  return <div className={cx(styles.playerWrapper, className)}>
    <iframe
      className={styles.player}
      src={iframeURL}
      allowFullScreen
    />
  </div>
}