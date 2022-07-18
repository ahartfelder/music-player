import './App.css';
import MusicList from './components/MusicList';
import Player from './components/Player';
import { musics } from './data/musicData'

function App() {
  const selectedMusic = musics[0]
  return (
    <div className="App">
      <header>
        <h1>
          <span className='header-title'>Music</span> Player
        </h1>
      </header>
      <MusicList musics={musics} />
      <Player music={selectedMusic} />
    </div>
  );
}

export default App;
