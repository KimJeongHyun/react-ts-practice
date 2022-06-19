# react-ts-practice

개인 Typescript 연습장입니다.

## Skills

* View : React v17, React-router-dom v6, Styled-components
* State : Zustand
* Packs 
  - React-query
  - React-icons
* Others
  - Typescript
  - Git
  - Eslint, Prettier

## Functions

* Zustand
  - 전역 상태 관리 라이브러리.
  - 전환된 컬러 모드의 상태 저장.

* React-query
  - useQuery 이용
  - fetch 후 data.data로 분해되도록 select 옵션 사용됨
  - 통신 함수를 커스텀 훅 형태로 분화하여 View ~ Model 분리

* Light/Dark mode
  - Styled-components의 Theme을 이용한  모드 전환.
  - Session-storage를 이용한 세션의 컬러 모드 상태 보존.


* Cards
  - 반응형 Grid의 9개의 카드 영역.
  - input:string을 이용한 comment 추가 가능.
  - Context로 움직이는 state로 인한 재선언 방지 용도로 handleComments function을 callback처리
  
* Calculator
  - 윈도우 계산기 cloning
