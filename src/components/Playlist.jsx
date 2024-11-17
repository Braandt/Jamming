import { useState } from "react"
import TrackList from "./TrackList"

const Playlist = ({ genre, tracks, setPlaylistTracks, createdPlaylists, setCreatedPlaylists }) => {

    const [playlistName, setPlaylistName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const nextId = createdPlaylists[createdPlaylists.length - 1].id + 1
        const playlistCover = tracks.length > 0 ? tracks[0].cover : ''

        if (playlistName !== '') {
            const tracksIds = []
            tracks.map(track => tracksIds.push(track.id))
            const newPlaylist = { id: nextId, name: playlistName, genre: genre, cover: playlistCover, tracksIds: tracksIds }
            setCreatedPlaylists(prevState => [...prevState, newPlaylist])
            setPlaylistTracks([])
            setPlaylistName('')
        } else {
            alert('Please provide a name for the new playlist')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='container playlist-container'>
            <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} className='name-input' type="text" />
            <TrackList tracks={tracks} addTrack={false} setPlaylistTracks={setPlaylistTracks} />

            {tracks.length > 0 && (
                <button onClick={null}>Save to Spotify</button>
            )}

        </form>
    )
}

export default Playlist