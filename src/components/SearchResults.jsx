import { useState } from "react"
import TrackList from "./TrackList"

const SearchResults = ({ playlistTracks, setPlaylistTracks }) => {

    const [tracks, setTracks] = useState([
        { id: 1, song: 'title1', artist: 'artist1', album: 'album1', cover: './album-cover.jpg' },
        { id: 2, song: 'title2', artist: 'artist2', album: 'album2', cover: './album-cover-2.jpg' },
        { id: 3, song: 'title3', artist: 'artist3', album: 'album3', cover: './album-cover-3.jpg' },
    ])

    return (
        <div className='container results-container'>
            <h1 className='results'>Results</h1>

            <TrackList tracks={tracks} addTrack={true} playlistTracks={playlistTracks} setPlaylistTracks={setPlaylistTracks} />

        </div>
    )
}

export default SearchResults