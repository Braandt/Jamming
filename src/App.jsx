import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { useState } from 'react';

function App() {

  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 1, song: 'title1', artist: 'artist1' },
  ])

  console.log(playlistTracks)

  return (
    <>
      <div className="header">
        <h1 className="logo">Jamming</h1>
      </div>

      <div className='main'>
        <SearchBar />
        <button className='search-btn'>Search</button>

        <div className='results-playlist-container'>

          <SearchResults setPlaylistTracks={setPlaylistTracks} />

          <Playlist tracks={playlistTracks} setPlaylistTracks={setPlaylistTracks} />

        </div>

      </div>
    </>
  )
}

export default App;
