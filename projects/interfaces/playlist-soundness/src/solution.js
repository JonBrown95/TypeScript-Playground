export function unrollPlaylist(items) {
    const artists = {};
    const songs = [];
    let time = 0;
    function addSong(song) {
        const songArtists = typeof song.artist === "string" ? [song.artist] : song.artist;
        for (const artist of songArtists) {
            artists[artist] ??= [];
            artists[artist].push(song.name);
        }
        time += song.length;
        songs.push(song.name);
    }
    for (const item of items) {
        switch (item.type) {
            case "song":
                addSong(item);
                break;
            case "album":
                item.songs.forEach(addSong);
                break;
            case "playlist":
                item.resolve().forEach(addSong);
                break;
        }
    }
    return { artists, songs, time };
}
