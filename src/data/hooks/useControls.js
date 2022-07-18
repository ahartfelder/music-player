import { useState } from 'react'
import { musics } from '../musicData'

export function useControls() {
  const [selectedMusic, setSelectedMusic] = useState({})

  function selectMusic(music) {
    setSelectedMusic(music)
    console.log(music)
  }

  return {
    musics,
    selectedMusic,
    selectMusic
  }
}