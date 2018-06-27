var playlist = {
  'My Bloody Valentine': 'Song1',
  'Phil Ochs': 'Song2',
  'Slowdive': 'Song3'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['My Bloody Valentine'] = 'Black Balloon'
  playlist['Phil Ochs'] = 'Song Name1';
  playlist['Slowdive'] = 'Not sure what they sing';
  return playlist
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist['My Bloody Valentine']
  return playlist
}