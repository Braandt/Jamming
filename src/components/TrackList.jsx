import Track from "./Track"

const TrackList = ({ tracks, addTrack, playlistTracks, setPlaylistTracks }) => {

    return (
        <div className='songs-container'>
            {tracks[0] && tracks.map((track, key) => (
                <Track key={key} track={track} tracks={tracks} addTrack={addTrack} playlistTracks={playlistTracks} setPlaylistTracks={setPlaylistTracks} />
            ))}
        </div>
    )
}

export default TrackList