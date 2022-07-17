import styles from './MusicList.module.css'

export default function MusicList() {
  const musicList = [
    {
      id: 1,
      title: 'First Music',
      artist: 'Artist 1',
      duration: 100,
      src: ''
    },
    {
      id: 2,
      title: 'Second Music',
      artist: 'Artist 2',
      duration: 150,
      src: ''
    },
    {
      id: 3,
      title: 'Third Music',
      artist: 'Artist 3',
      duration: 200,
      src: ''
    }
  ]
  
  return (
    <ul className={styles.list}>
      {
        musicList.map( music => {
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