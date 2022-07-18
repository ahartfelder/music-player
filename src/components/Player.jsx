import styles from './Player.module.css'
import timeFormatter from '../data/TimeService'
import { useEffect, useRef, useState } from 'react'

export default function Player({music, next, back}) {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [canPlay, setCanPlay] = useState(false)
  const [loop, setLoop] = useState(false)
  const audioRef = useRef()
  
  useEffect(() => {
    setCanPlay(false)
    setIsPlaying(false)
    setCurrentTime(0)
    setDuration(music.duration || 0)
  }, [music])

  useEffect(() => {
    if(isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    const interval = setInterval(() => {
      if(isPlaying) {
        setCurrentTime(audioRef.current.currentTime)
      }
    }, 500)
    return () => clearInterval(interval)
  }, [isPlaying])
  
  function onCanPlay() {
    if(currentTime === 0) {
      setCanPlay(true)
      setIsPlaying(true)
    }
  }
  
  function onEnded() {
    setCanPlay(false)
    setIsPlaying(false)
    next(loop)
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
        <div className={styles.line} style={{'--width': `${currentTime * 100 / duration}%`}}></div>
        <input type="range" 
          className={styles.slider} 
          onChange={e => {
            audioRef.current.currentTime = e.target.value
            setCurrentTime(e.target.value)
          }}
          value={currentTime}
          max={duration}
          step='any'
        />
      </div>
      <audio controls
        className={styles.audio}
        ref={audioRef}
        src={music.url}
        onCanPlay={onCanPlay} 
        onEnded={onEnded} />
      <div className={styles.controls}>
        {/* <button
          className={[styles.btn, `${shuffle ? styles.active : styles.deactive}`].join(' ')}
          onClick={() => setShuffle(!shuffle)}
          disabled={true}
        >
          {'\u292d'}
        </button> */}
        <button
          className={styles.btn}
          onClick={() => {
            back()
            audioRef.current.currentTime = 0
          }}
          disabled={!canPlay}
        >
          {'\u25c0\u25ae'}
        </button>
        <button 
          className={styles.btn}
          onClick={() => setIsPlaying(!isPlaying)}
          disabled={!canPlay}
        >
          {isPlaying ? '\u25ae\u25ae' : '\u25b6'}
        </button>
        <button 
          className={styles.btn}
          onClick={() => next(loop)}
          disabled={!canPlay}
        >
          {'\u25ae\u25b6'}
        </button>
        <button
          className={[styles.btn, `${loop ? styles.active : styles.deactive}`].join(' ')}
          onClick={() => setLoop(!loop)}
        >
          {'\u21bb'}
        </button>
      </div>
    </div>
  )
}