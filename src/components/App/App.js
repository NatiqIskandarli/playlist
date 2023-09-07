import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div className={styles.body}>
      <header> Jammming </header>
      <SearchBar />
      <div className={styles.container}>
        <SearchResult />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
