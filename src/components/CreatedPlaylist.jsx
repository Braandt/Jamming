const CreatedPlaylist = ({ data }) => {

    console.log(data);

    return (
        <a href="https://open.spotify.com/" target="_blank" className="created-playlist">
            <div className="album-cover">
                <img src={data.cover} alt="" />
            </div>

            <div className="name-genre">
                <div className="playlist-name">{data.name}</div>
                <div className="playlist-genre">{data.genre}</div>
            </div>
        </a>
    )
}

export default CreatedPlaylist