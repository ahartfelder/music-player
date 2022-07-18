import styles from './MusicList.module.css'
import timeFormatter from '../data/TimeService'

export default function MusicList({musics, selected, onSelect}) { 
  function isSelected(music) {
    return music === selected ? styles.selected : ''
  }
   
  return (
    <ul className={styles.list}>
      {
        musics.map( music => {
          return (
            <li key={music.id} 
              className={[styles.item, isSelected(music)].join(' ')}
              onClick={() => onSelect(music)}
            >
              <div className={styles.name}>
                <span className={styles.title}>{music.title}</span>
                <span className={styles.artist}>{music.artist}</span>
              </div>
              <span className={styles.duration}>{timeFormatter(music.duration)}</span>
            </li>
          )
        })
      }
    </ul>
  )
}