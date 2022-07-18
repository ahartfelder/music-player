import styles from './Player.module.css'
import timeFormatter from '../data/TimeService'
import { useEffect, useRef, useState } from 'react'

export default function Player({music}) {
  const audioRef = useRef()
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    console.log('Hey')
  }, [music])

  useEffect(() => {
    if(isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(audioRef.current.currentTime), 500)
    return clearInterval(interval)
  }, [isPlaying])

  function onCanPlay() {
    setCanPlay(true)
    setIsPlaying(true)
  }
  
  function onEnded() {
    setCanPlay(false)
    setIsPlaying(false)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.music}>
        <div className={styles.name}>
          <span className={styles.title}>{music.title}</span>
          <span className={styles.artist}>{music.artist}</span>
        </div>
        <span className={styles.duration}>{timeFormatter(currentTime)} / {timeFormatter(duration)}</span>
      </div>
      <div className={styles.timeline}>
        <div className={styles.line}></div>
        <input type="range" 
          className={styles.slider} 
          onChange={e => {
            audioRef.current.currentTime = e.target.value
            setCurrentTime(e.target.value)
          }}
          value={currentTime}
          max={duration}
        />
      </div>
      <audio controls
        className={styles.audio}
        ref={audioRef}
        src={music.url}
        onCanPlay={onCanPlay}
        onEnded={onEnded}
      />
      <div className={styles.controls}>
        <button className={styles.play}>Play</button>
      </div>
    </div>
  )
}