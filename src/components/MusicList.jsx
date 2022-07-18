import styles from './MusicList.module.css'

export default function MusicList({musics}) {  
  return (
    <ul className={styles.list}>
      {
        musics.map( music => {
          return (
            <li key={music.id} className={styles.item}>
              <div className={styles.name}>
                <span className={styles.title}>{music.title}</span>
                <span className={styles.artist}>{music.artist}</span>
              </div>
              <span className={styles.duration}>{music.duration}</span>
            </li>
          )
        })
      }
    </ul>
  )
}