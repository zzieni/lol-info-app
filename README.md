#  리그 오브 레전드(League of Legends) 챔피언과 아이템 정보를 제공하는 웹사이트입니다. Next.js와TypeScript를 사용 하여 개발되었으며 , Riot Games API를 활용하여 데이터를 가져옵니다.
![image](https://github.com/user-attachments/assets/e81d2387-dc4a-4d53-bce2-8817c2701c33)


## ☀️ 주요기능
- 챔피온 목록 조회   
- 챔피온 상세 정보 조회    
- 아이템 목록 조회
- 현재 무료 로테이션 챔피온 목록 조회

## 🌈 기술 스택 
1. Next.js
2. TypeScript  
3. TanStack Query  
4. Tailwind CSS

## 프로젝트 구조
```
📦src
 ┣ 📂app
 ┃ ┣ 📂_components
 ┃ ┃ ┗ 📜ThemeToggle.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┗ 📜ChampionCard.tsx
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┗ 📜GeistVF.woff
 ┃ ┣ 📂items
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┗ 📜ItemDetailPage.tsx
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┃ ┗ 📜RotationList.tsx
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜global-error.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜not-found.tsx
 ┃ ┣ 📜page.tsx
 ┃ ┣ 📜providers.tsx
 ┃ ┗ 📜themeProvider.tsx
 ┣ 📂types
 ┃ ┣ 📜ApiKey.ts
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜ChampionDetail.ts
 ┃ ┣ 📜ChampionRotation.ts
 ┃ ┗ 📜Item.ts
 ┗ 📂utils
 ┃ ┣ 📜riotApi.ts
 ┃ ┗ 📜serverApi.ts
```

## ⚡️ 데이터 페칭
- 서버 컨포넌트
 sercer axtion을 활용하여 데이터를 페칭합니다. utils/serverApi.ts 파일에 정의된 함수들을 사용하여 riot games API로 부터 데이터를 가져옵니다.

- 클라이언트 컨포넌트
route hadlers를 통해 데이터를 페칭 합니다. api/rotation 엔드포인트를 사용하여 현재 무료 로테이션 챔피온 정보를 가져옵니다.

## 💫 페이지별 렌더링
- 챔피온 페이지 목록 페이지 : ISR
- 챔피온 상세 페이지 : SSR
- 아이템 목록 페이지 : SSG
- 로테이션 챔피온 페이지 : CSR  

## 🫧 성능 최적화
- Next.js의 `<Image>` 컴포넌트를 사용하여 이미지 최적화
- React Suspense와 Streaming SSR을 활용한 로딩 최적화
   
## 🌪️ 에러 핸들링
- 각 페이지 및 컴포넌트에 대한 에러 처리를 위해 `error.tsx` 파일을 구현했습니다. 전역 에러 처리를 위해 `global-error.tsx`를 사용하였습니다.   
   
## ❄️ 반응형 디자인   
- Tailwind CSS를 사용하여 모바일부터 데스크톱까지 다양한 화면 크기에 대응하는 반응형 디자인을 구현했습니다.
   
## 🌛 다크모드
- Header 컴포넌트에 다크 모드 토글 기능을 추가하여 사용자가 원하는 테마를 선택할 수 있도록 구현했습니다.

## ☘️ API 명세서
| 함수명 | 설명 | 엔드포인트 |
| --- | --- | --- |
| fetchLatestVersion | 최신 버전 정보 조회 | https://ddragon.leagueoflegends.com/api/versions.json |
| fetchChampionList | 최신 버전 챔피언 목록 조회 | https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json |
| fetchChampionDetail | 특정 챔피언 상세 정보 조회 | https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json |
| fetchItemList | 최신 버전 아이템 목록 조회 |  https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json |
   
## 트러블 슈팅  
- [🚗 api 호출 최소화 리팩토링 ](https://zzieni.tistory.com/129)   
- [🙋‍♂️Next.js next-themes로 다크모드 구현하기](https://zzieni.tistory.com/128)

