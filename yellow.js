function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
}
uncheckAll();

const yellowDoorSongs = [
  'でらっくmaimai♪てんてこまい!',
  '絡めトリック利己ライザー',
  'ぼくたちいつでも　しゅわっしゅわ！',
  'Paradisoda',
  'とびだせ！TO THE COSMIC!!',
  'ミルキースター・シューティングスター',
  'ホシシズク',
  'ツムギボシ',
  'エスオーエス',
  'プリズム△▽リズム',
  'NOIZY BOUNCE',
  'Fraq'
];

const allCheckboxes = document.querySelectorAll('.favorite_music_name');

allCheckboxes.forEach(songNameDiv => {
  const songName = songNameDiv.textContent.trim();
  if (yellowDoorSongs.includes(songName)) {
    const checkbox = songNameDiv.closest('label').querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = true;
    }
  }
});

changecheck();
