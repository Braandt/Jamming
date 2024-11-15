import TrackList from "./TrackList"

const Playlist = ({ tracks, setPlaylistTracks }) => {

    return (
        <div className='playlist-container'>
            <input className='name-input' type="text" />
            <TrackList tracks={tracks} addTrack={false} setPlaylistTracks={setPlaylistTracks} />
        </div>
    )
}

export default Playlist