import { useState } from "react"
import TrackList from "./TrackList"

const SearchResults = ({ setPlaylistTracks }) => {

    const [tracks, setTracks] = useState([
        { id: 1, song: 'title1', artist: 'artist1' },
        { id: 2, song: 'title2', artist: 'artist2' },
        { id: 3, song: 'title3', artist: 'artist3' },
    ])

    return (
        <div className='results-container'>
            <h1 className='results'>Results</h1>

            <TrackList tracks={tracks} addTrack={true} setPlaylistTracks={setPlaylistTracks} />

        </div>
    )
}

export default SearchResults