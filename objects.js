var playlist = {
  'Billy Joel': 'River of Dreams',
  'Elton John': 'Benny and the Jets'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['My Bloody Valentine'] = 'Black Balloon'
  playlist['Phil Ochs'] = 'Song Name1';
  playlist['Slowdive'] = 'Not sure what they sing';
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist['BillyJoel']
}