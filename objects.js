var playlist = {
  'Joanna Newsom': "'Only Skin'",
  'Clipse': "'Grindin'",
  'Kacey Musgraves': "'Slow Burn'"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

updatePlaylist(playlist, 'Phil Ochs')

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
