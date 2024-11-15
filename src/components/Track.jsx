const Track = ({ track, addTrack, setPlaylistTracks }) => {

    function handleClick() {
        if (addTrack) {
            setPlaylistTracks(prevState => [...prevState, track])
        } else {
            setPlaylistTracks(prevState => prevState.filter(item => item.id != track.id))
        }
    }

    return (
        <div onClick={handleClick} className="song-item">
            <div className="song-and-artist">
                <div className='song'>{track.song}</div>
                <div className='artist'>{track.artist}</div>
            </div>
            <div>{addTrack ? '+' : '-'}</div>
        </div>
    )
}

export default Track