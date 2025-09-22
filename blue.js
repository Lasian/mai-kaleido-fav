function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
}
uncheckAll();

const blueDoorSongs = [
  'STEREOSCAPE',
  'Crazy Circle',
  'シエルブルーマルシェ',
  'ブレインジャックシンドローム',
  '共鳴',
  'Ututu',
  'REAL VOICE',
  'ユメヒバナ',
  'オリフィス',
  'パラボラ',
  '星めぐり、果ての君へ。',
  'スローアライズ',
  '生命不詳',
  'チエルカ／エソテリカ',
  'RIFFRAIN',
  'Falling',
  'ピリオドサイン',
  '群青シグナル',
  'アンバークロニクル',
  'リフヴェイン',
  '宵の鳥',
  'Kairos',
  'フェイクフェイス・フェイルセイフ',
  'シックスプラン',
  'フタタビ',
  'ふらふらふら、',
  'パラドクスイヴ',
  'YKWTD',
  '184億回のマルチトニック'
];

const allCheckboxes = document.querySelectorAll('.favorite_music_name');

allCheckboxes.forEach(songNameDiv => {
  const songName = songNameDiv.textContent.trim();
  if (blueDoorSongs.includes(songName)) {
    const checkbox = songNameDiv.closest('label').querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = true;
    }
  }
});

changecheck();
