import './App.css';
import MusicList from './components/MusicList';
import Player from './components/Player';
import { useControls } from './data/hooks/useControls';

function App() {
  const { musics, selectedMusic, selectMusic, next, back } = useControls()
  return (
    <div className="App">
      <header>
        <h1>
          <span className='header-title'>Music</span> Player
        </h1>
      </header>
      <MusicList musics={musics} selected={selectedMusic} onSelect={selectMusic} />
      <Player music={selectedMusic} next={next} back={back} />
    </div>
  );
}

export default App;
