function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
}
uncheckAll();

const purpleDoorSongs = [
  '言ノ葉カルマ',
  '悪戯',
  '言ノ葉遊戯',
  'りばーぶ',
  '洗脳',
  '空威張りビヘイビア',
  '天国と地獄 -言ノ葉リンネ-',
  'シアトリカル・ケース',
  '届かない花束',
  'ステップアンドライム',
  'アンビバレンス',
  '分解収束テイル',
  'Mystic Parade'
];

const allCheckboxes = document.querySelectorAll('.favorite_music_name');

allCheckboxes.forEach(songNameDiv => {
  const songName = songNameDiv.textContent.trim();
  if (purpleDoorSongs.includes(songName)) {
    const checkbox = songNameDiv.closest('label').querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = true;
    }
  }
});

changecheck();
