const redDoorSongs = [
  'KONNANじゃないっ!',
  'ドラゴンエネルギー',
  'Garden Of The Dragon',
  'DRAGONLADY',
  '好きな惣菜発表ドラゴン',
  'Brand-new Japanesque',
  'Outlaw\'s Lullaby',
  '鼓動',
  '神室雪月花',
  'ばかみたい【Taxi Driver Edition】'
];

const allCheckboxes = document.querySelectorAll('.favorite_music_name');

allCheckboxes.forEach(songNameDiv => {
  const songName = songNameDiv.textContent.trim();
  if (redDoorSongs.includes(songName)) {
    const checkbox = songNameDiv.closest('label').querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = true;
    }
  }
});

changecheck();
