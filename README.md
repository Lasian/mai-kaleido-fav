# mai-kaleido-fav
마이마이 칼레이도 대상곡 즐겨찾기 스크립트

# Info

칼레이도스코프의 각 문마다 플레이를 요구하는 곡들을 즐겨찾기에 넣어주는 스크립트입니다.


각 문마다 해당되는 곡들은 나무위키 문서를 참조하여 작성하였습니다.


해당 열쇠마다 필요한 투어 멤버, 프레임 설정 및 필요 조건은 본인이 직접 확인 해주셔야 합니다.

##

1. https://maimaidx-eng.com/maimai-mobile/home/userOption/favorite/updateMusic 접속
2. 각 문마다 해당되는 스크립트를 주소창에 복사.

##


파란색 문
```javascript
javascript:fetch('https://raw.githubusercontent.com/Lasian/mai-kaleido-fav/refs/heads/main/blue.js').then(response=>response.text()).then(text=>eval(text));
```
하얀색 문
```javascript
javascript:fetch('https://raw.githubusercontent.com/Lasian/mai-kaleido-fav/refs/heads/main/white.js').then(response=>response.text()).then(text=>eval(text));
```
보라색 문
```javascript
javascript:fetch('https://raw.githubusercontent.com/Lasian/mai-kaleido-fav/refs/heads/main/purple.js').then(response=>response.text()).then(text=>eval(text));
```
검은색 문
```javascript
javascript:fetch('https://raw.githubusercontent.com/Lasian/mai-kaleido-fav/refs/heads/main/black.js').then(response=>response.text()).then(text=>eval(text));
```
노란색 문
```javascript
javascript:fetch('https://raw.githubusercontent.com/Lasian/mai-kaleido-fav/refs/heads/main/yellow.js').then(response=>response.text()).then(text=>eval(text));
```
빨간색 문
```javascript
javascript:fetch('https://raw.githubusercontent.com/Lasian/mai-kaleido-fav/refs/heads/main/red.js').then(response=>response.text()).then(text=>eval(text));
```


해당 스크립트는 PC에서 적용이 확인 되었으며, 모바일 환경은 아직 테스트를 시행하지 않았습니다.
이 점 참고해주시길 바랍니다.
