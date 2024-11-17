const Track = ({ track, addTrack, playlistTracks, setPlaylistTracks }) => {

    function handleClick() {

        if (addTrack) {
            const existsOnPlaylist = playlistTracks.some(item => item.id === track.id)
            if (!existsOnPlaylist) {
                setPlaylistTracks(prevState => [...prevState, track])
            } else {
                setPlaylistTracks(prevState => prevState.filter(item => item.id !== track.id))
            }
        } else {
            setPlaylistTracks(prevState => prevState.filter(item => item.id !== track.id))
        }
    }

    const selectedSongStyle = addTrack ? playlistTracks.some(item => item.id === track.id) ? 'song-selected' : '' : ''

    return (
        <div onClick={handleClick} className={`song-item ${selectedSongStyle}`}>

            <div className="album-cover">
                <img src={track.cover} alt="" />
            </div>

            <div className="song-data">

                <div className='song'>{track.song}</div>

                <div className="artist-album">

                    <div className='artist'>{track.artist}</div>
                    <div>|</div>
                    <div>{track.album}</div>

                </div>

            </div>

            <div className="add-symbol">{addTrack ? '+' : '-'}</div>
        </div>
    )
}

export default Track