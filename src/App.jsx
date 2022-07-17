import './App.css';
import MusicList from './components/MusicList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <span className='header-title'>Music</span> Player
        </h1>
      </header>
      <MusicList />
    </div>
  );
}

export default App;
