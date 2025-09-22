const whiteDoorSongs = [
  '封焔の135秒',
  'ほしぞらスペクタクル',
  'U&iVERSE -銀河鸞翔-',
  'ツムギボシ',
  'ここからはじまるプロローグ。 (Kanon Remix)',
  'Latent Kingdom'
];

const allCheckboxes = document.querySelectorAll('.favorite_music_name');

allCheckboxes.forEach(songNameDiv => {
  const songName = songNameDiv.textContent.trim();
  if (whiteDoorSongs.includes(songName)) {
    const checkbox = songNameDiv.closest('label').querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = true;
    }
  }
});

changecheck();
