import styles from './Player.module.css'

export default function Player({music}) {
  return (
    <div className={styles.container}>
      <div className={styles.music}>
        <div className={styles.name}>
          <span className={styles.title}>{music.title}</span>
          <span className={styles.artist}>{music.artist}</span>
        </div>
        <span className={styles.duration}>{music.duration}</span>
      </div>
      <div className={styles.timeline}>
        <div className={styles.line}></div>
      </div>
      <div className={styles.controls}>
        <button className={styles.play}>Play</button>
      </div>
    </div>
  )
}