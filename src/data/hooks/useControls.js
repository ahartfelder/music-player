import { useEffect, useState } from 'react'
import { musics } from '../musicData'

export function useControls() {
  const [selectedMusic, setSelectedMusic] = useState({})
  
  function selectMusic(music) {
    setSelectedMusic(music)
  }

  function next(loop) {
    const index = musics.findIndex(music => selectedMusic === music)
    if(musics[index + 1]) {
      setSelectedMusic(musics[index + 1])
    } else {
      if(loop){
        setSelectedMusic(musics[0])
      } else {
        setSelectedMusic({})
      }
    }
  }

  function back() {
    const index = musics.findIndex(music => selectedMusic === music)
    if(musics[index - 1]) {
      selectMusic(musics[index - 1])
    }
  }

  return {
    musics,
    selectedMusic,
    selectMusic,
    next,
    back
  }
}