## 📑 프로젝트 소개

WANTED & CODESTATES 프리온보딩 코스 

TEAM 8 팀기업과제 8번 입니다.

<br>

### < 더블엔씨 >

PROJECT PERIOD: 2022.02.24 ~ 2022.02.25

<br>

[배포링크]()

<br>

## ✨ 주요 기능

- 충청북도 휴양림 중 마음에 드는 곳에 메모를 남겨 저장하는 서비스
- 휴양림 데이터는 10개씩 무한 스크롤로 조회됩니다.
- 유저는 휴양림의 이름, 주소, 메모를 활용해 검색할 수 있습니다.
- 유저는 휴양림을 저장할 때 메모를 반드시 작성해야 합니다.
- 유저는 저장된 정보 중 하나를 선택해 삭제 또는 수정할 수 있습니다.

<br>

### 🧔 메인 



<br>

### 구현한 기능 목록 및 어려웠던 점

1. SEARCH

[ 김희진 ] 

- 구현 내용 & 방법
    - 상단 서치바 제작
    - 세개의 라벨(이름, 주소, 메모)중 하나를 선택하면 선택한 태그에 대해서만 검색이 가능하게 구현하였습니다.
        
- 구현하면서 어려웠던 점
    - 여러개의 컴포넌트단위로 나누어 개발을 하다보니 컴포넌트를 합칠때 오류가 많이 생겼습니다. 컴포넌트 제작시 조금 더 순수함수와 비슷하게 만들어야 겠다는 생각을 했습니다.


<br>


2. LIST ITEM

[ 이승우 ] 

- 구현 내용 & 방법
    - 목록 아이템을 디자인하고 기능을 구현하였습니다.
    - 서치 바와 모달 컴포넌트에 상태를 연동하여 상태 변경에 따라 리렌더링할 수 있도록 하였습니다.
    
- 구현하면서 어려웠던 점
    - 다른 컴포넌트와 연동시 어떤 방법이 최선일까를 고민하면서 시행착오를 겪었습니다.


<br>


3. API 호출, 무한스크롤

[ 최우철 ] 

- 구현 내용 & 방법
    - nextJS API route를 통한 서버사이드 ajax 호출 및 초기데이터 설정을 구현했습니다.
    - 리스트 내용을 클릭 시 열리는 저장모달창을 통해 로컬스토리지에 데이터를 저장할 수 있도록 서버사이드에서 가공하는 작업을 하였습니다.
    
- 구현하면서 어려웠던 점
    - 아무래도 nextJS를 처음 써보다 보니 서버사이드 API 요청 체계에 익숙해지는 것이 어려웠습니다.
    - 무한스크롤도 연습해보기 위해 Intersection observer을 사용해보는 과정 중에 서버사이드 환경이어서 window를 인식시키기 위한 추가작업이 필요했기에 혼선이 있었습니다.


<br>


[ 김진기 ] 

- 구현 내용 & 방법
    - 무한 스크롤 구현
    - 로딩 스피너 구현
    
- 구현하면서 어려웠던 점
    - 무한 스크롤 구현이 생각보다 어려웠습니다. 마지막에 도달하면 Intersection Observer API의 콜백함수가 다음 페이지를 API에 요청해야 하는데 자꾸 같은 페이지만 요청해서 그 부분을 해결하는데 시간을 많이 썼습니다.
    - useSWRInfinite 함수의 작동법을 파악하는데 시간이 꽤 걸렸습니다.


<br>



4. EDIT/SAVE MODAL, LOCAL STORAGE

[ 박성현 ] 

- 구현 내용 & 방법
    - Modal 및 Backdrop 창 구현
    - createportal을 활용하여 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 렌더링 하였습니다.
    
- 구현하면서 어려운점
    - 바깥에서 모달을 띄우다보니 닫는함수를 프롭스로 보내야한다는 것을 생각하는게 어려웠습니다.

<br>


[ 변건오 ] 
- 구현 내용 & 방법
    - LocalStorage 저장, 수정, 삭제 기능 구현
    - 
- 구현하면서 어려웠던 점
    - 처음 next.js를 쓰면서 localStorage가 `not defined`라고 떠서 localStorage에 접근이 어려웠습니다.


<br>


5. FEEDBACK MODAL

[ 김혜영 ] 

- 구현 내용 & 방법
    - 사용자의 행동에 따라 적절한 피드백을 돌려주는 모달 작성
    - 사용자가 메모를 쓰지 않을 때(”메모를 작성해주세요”), 사용자가 휴양림을 저장할 때(”저장이 완료되었습니다.”), 사용자가 메모를 수정할 때(”수정이 완료되었습니다"), 사용자가 휴양림을 삭제할 때(”삭제가 완료되었습니다")를 적절히 돌려주게 작성.
    
- 구현하면서 어려웠던 점
    - 원래는 동작이 실행될 때 각각의 모달을 만들어 연결시키려고 했는데 우철님이 도와주셔서 재사용성이 있는 메세지창을 띄울 수 있었습니다. 똑같은 부분이면 재사용성까지 고려하여 만들어야 한다는 것을 배울 수 있었습니다.


<br>

## 🗂 프로젝트 구조

```
component
 ┣ button
 ┃ ┗ Button.js
 ┣ item
 ┃ ┣ Item.js
 ┃ ┗ ItemGroup.js
 ┣ modal.html
 ┃ ┣ BackDrop.js
 ┃ ┣ FeedbackModal.js
 ┃ ┗ Modal.js
 ┃ Contents.js
 ┃ PlusButton.js
 ┃ SearchBar.js
 ┗ ViewForestList.js
pages
 ┣ api
 ┃ ┗ pubMapForest.js
 ┣ _app.js
 ┃ _document.js
 ┃ index.js
 ┃ list.js
 ┣ public
 ┃ ┃ add.png
 ┃ ┃ back.svg
 ┃ ┃ plus.svg
 ┃ ┃ title.png
 ┃ ┗ TopHeader.vue
 ┣ data
 ┃ ┗ index.js
 ┣ App.vue
 ┗ main.js
```

<br>

## 🛠 사용 기술

front-end

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![axios](https://img.shields.io/badge/-AXIOS-purple?style=for-the-badge)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)



dev-ops

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

community

![Discord](https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Apple](https://img.shields.io/badge/-APPLE-black?style=for-the-badge&logo=apple)
![Ubuntu](https://img.shields.io/badge/-UBUNTU-gray?style=for-the-badge&logo=Ubuntu)


## 팀원소개
|이름|포지션|깃헙|
|:---:|:---:|:---:|
|김진기(팀장)|Front|[![github](https://img.shields.io/badge/김진기-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hatoba29)|
|최우철(팀원)|Front|[![github](https://img.shields.io/badge/최우철-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chltjdrhd777/)|
|변건오(팀원)|Front|[![github](https://img.shields.io/badge/변건오-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/guno517)|
|박성현(팀원)|Front|[![github](https://img.shields.io/badge/박성현-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/psh9408p)|
|이승우(팀원)|Front|[![github](https://img.shields.io/badge/이승우-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/starhn87)|
|김혜영(팀원)|Front|[![github](https://img.shields.io/badge/김혜영-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/hit-that-drum)|
|김희진(팀원)|Front|[![github](https://img.shields.io/badge/김희진-181717?style=flat-square&logo=GitHub&logoColor=white)](https://github.com/chloe41297)|
