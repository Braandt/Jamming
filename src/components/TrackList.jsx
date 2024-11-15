import Track from "./Track"

const TrackList = ({ tracks, addTrack, setPlaylistTracks }) => {

    return (
        <div className='songs-container'>
            {tracks[0] && tracks.map((track, key) => (
                <Track key={key} track={track} addTrack={addTrack} setPlaylistTracks={setPlaylistTracks} />
            ))}
        </div>
    )
}

export default TrackList