import CreatedPlaylist from "./CreatedPlaylist"

const CreatedPlaylists = ({ playlists }) => {

    return (
        <div className="container">
            <h1>Playlists</h1>

            <div className="created-playlists-container">
                {playlists.map((playlist, key) => (
                    <CreatedPlaylist data={playlist} key={key} />
                ))}
            </div>
        </div>
    )
}

export default CreatedPlaylists