
const musicPlayer = {
    play: function(song) {
        console.log(`Playing "${song}"`)
    },
    pause: function(song) {
        console.log(`Pause "${song}"`)
    },
    createPlaylist: function(name) {
        console.log(`Creating "${name}" playlist`)
    },
    deletePlaylist: function(name) {
        console.log(`Deleting "${name}" playlist`)
    },
    addSong: function(song, playlist) {
        console.log(`Adding "${song}" to "${playlist}" playlist`)
    },
    deleteSong: function(song, playlist) {
        console.log(`Deleting "${song}" from "${playlist}" playlist`)
    },
}

musicPlayer.createPlaylist("Rock")
musicPlayer.addSong("Beat it", "Rock")
musicPlayer.play("Beat it")
musicPlayer.pause("Beat it")
musicPlayer.deleteSong("Beat it", "Rock")
musicPlayer.deletePlaylist("Rock")