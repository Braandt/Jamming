import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { useState } from 'react';
import CreatedPlaylists from './components/CreatedPlaylists';

function App() {

  const [playlistTracks, setPlaylistTracks] = useState([])

  const [createdPlaylists, setCreatedPlaylists] = useState([
    { id: 1, name: 'playlist1', genre: 'genre', cover: './album-cover.jpg', tracksIds: [1, 2] },
  ])

  const [genre, setGenre] = useState('')

  return (
    <>
      <div className="header">
        <h1 className="logo">Jamming</h1>
      </div>

      <div className='main'>
        <SearchBar genre={genre} setGenre={setGenre} />

        <div className='results-playlist-container'>

          <SearchResults playlistTracks={playlistTracks} setPlaylistTracks={setPlaylistTracks} />

          <Playlist genre={genre} tracks={playlistTracks} setPlaylistTracks={setPlaylistTracks} createdPlaylists={createdPlaylists} setCreatedPlaylists={setCreatedPlaylists} />

        </div>

        <CreatedPlaylists playlists={createdPlaylists} />

      </div>
    </>
  )
}

export default App;
