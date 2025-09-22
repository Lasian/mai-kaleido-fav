const blackDoorSongs = [
  'Blows Up Everything',
  '≠彡"/了→',
  'U&iVERSE -銀河鸞翔-',
  'Rising on the horizon',
  'KHYMΞXΛ',
  'Divide et impera!',
  'Valsqotch',
  'BREaK! BREaK! BREaK!',
  'GIGANTØMAKHIA',
  'ViRTUS',
  '系ぎて',
  '宙天'
];

const allCheckboxes = document.querySelectorAll('.favorite_music_name');

allCheckboxes.forEach(songNameDiv => {
  const songName = songNameDiv.textContent.trim();
  if (blackDoorSongs.includes(songName)) {
    const checkbox = songNameDiv.closest('label').querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = true;
    }
  }
});

changecheck();
