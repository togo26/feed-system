# 피드 시스템
코멘토 사전 과제 전형 제출용 입니다. (기간 - 2020.01.29 ~ 02.03)

## 실행 안내
```
// 설치 & 실행
npm install
npm run serve

// 유닛 테스트
npm run test:unit
```

## 요구 기능 구현 사항
- **반응형 웹**
  - [x] **PC**
  - [x] **Tablet/Mobile**: 768px 이하
- **컨텐츠 불러오기 (infinite-loading)**
  - [x] 글자 수가 많으면 자르고 생략기호(...) 표시
  - [x] 처음에 10개만 불러오기
  - [x] 스크롤이 최하단에 닿을 때마다 리스트에 10개씩 추가
- **정렬 (오름차순, 내림차순)**
  - [x] 선택한 정렬순으로 리스트 불러오기
  - [x] 선택된 정렬만 css 강조하기
  - [x] 기본값: 오름차순
- **필터 (modal)**
  - [x] 별도 컴포넌트로 분리하여 개발
  - [x] input type="checkbox"
  - [x] 기본값: 모두 선택
  - [x] 저장을 클릭하면 저장되고 모달이 종료됨
- **광고 삽입**
  - [x] 4번째마다 광고 1개 삽입
  - [x] 광고 이미지 비율 유지
  - [x] 글자 수가 많으면 자르고 생략기호(...) 표시
- **디테일 페이지**
  - [x] 피드에서 카드를 클릭하면 디테일 페이지로 이동(/:id)
- **고객센터 대응**
  - [별도 색션으로 설명]

## 고객 의견 반영 사항
- 고객 의견 중 유의미한 의견을 추려내고 언급된 횟수를 표기하였습니다. (중요도 평가 척도)
- 광고 노출 관련 (언급 3회)
  - 광고 줄이기 기능을 카테고리 필터 모달에 포함하였습니다. (6번째마다 광고 1개 삽입으로 변경)
- 글 내용 추가 확인 (언급 2회)
  - 홈 화면 카드 목록에 hover event를 추가하여 상세 정보를 좀 더 확인할 수 있도록 업데이트하였습니다.
- 검색 기능 (언급 2회)
  - 좌측 사이드 메뉴에 검색 기능을 포함했습니다. (타이핑 후 엔터)
- 리스트 추가 불러오기 (언급 1회)
  - 필터 버튼 좌측에 10개씩 혹은 20개씩 리스트 불러오기 토글을 추가하였습니다.
- 인터넷 익스플로러 호환 문제 (언급 1회)
  - 호환성 문제에 대해 2가지 해결 방법을 고민해보았습니다.
      - 바벨 설정이나 polyfill 등을 활용하여 브라우저 이슈 해결
      - *최신 브라우저 사용 권장 안내로 해결
  - 현재 과제 조건에서 추가적인 라이브러리를 설치하지 않고, 언급 횟수에 따른 중요도를 가늠해보았을 때 최신 브라우저 사용 권장 안내 방식이 적합하다고 판단, 적용하였습니다.
- 로딩 상태 (언급 1회)
  - 로딩 상태를 추가하였습니다.
- 필터링 현황 (언급 1회)
  - 오름차순 및 내림차순 토글 하단에 현재 선택된 카테고리를 태그로 확인할 수 있습니다.
- 그 외
  - 마지막 정렬 저장, 필터 저장 등 반영해볼 수 있는 부분들은 최대한 적용하였습니다.

## 추가 사항
- Jest를 사용하여 유닛 테스트를 진행하였습니다.

## 느낀 점 & 어려웠던 점
- Vue는 본 과제를 통해 처음 접했습니다.
  - 이틀 동안, 기본적인 문서나 영상 등을 참고해서 컨셉, 코드 작성 방식 등을 조사해보았습니다.
  - 리액트와 비교해 가장 좋다고 느꼈던 부분은 css-in-js를 사용할지 말지에 대한 고민이 필요가 없는 점이었습니다.
  - Vuex는 Redux와 비슷하지만, action 키워드의 역할 차이가 인상 깊었습니다. Redux는 비동기 핸들링을 위해 별도의 미들웨어를 통해 적용해야 하는데, Vuex의 action은 비동기 방식을 처리하는 용도로 설정되어 있는 점이 편리하다고 느꼈습니다.
- 피드 리스트에서 광고 배너의 균일한 순서 처리에 대한 어려움이 있었습니다.
    - 최초 API를 통해 전달 받은 피드, 광고 리스트를 합치지 않는 방식으로 생각해보았으나 뷰에서 로직의 복잡도가 올라가는 점을 고려해보았을 때 다소 부적절하다고 판단하였습니다.
  - 뷰에서 데이터 표현이 용이하도록 피드와 광고 리스트를 합치는 방식으로 설계해보았습니다.
  - 합치는 과정에서 컨텐츠 하나씩 인덱스 순서에 맞게 광고 정보와 결합하는 과정으로 설계를 하였으나, 무한 스크롤에 따라 인덱스가 어긋나 정보가 균일하게 노출되지 않는 문제가 있었습니다.
  - 불규칙한 노출 문제를 해결하기 위해 피드 리스트는 slice 메소드를 통해 새로운 배열을 생성하여 합쳐질 배열에 인덱스 홀수 단위로 넣고, 광고는 짝수 단위 인덱스로 삽입 후 마지막에 합쳐진 배열을 flat하여 문제를 해결하였습니다.
- 광고 노출 관련 고객 의견에 대해 고민해보았습니다.
  - 광고가 가끔 나타나거나, 삭제하거나, 가리기 등의 고객 의견이 있었습니다. 이 부분에서 고민되었던 점은 실제 사용하는 고객의 의견과 광고 공급자의 의견을 조율해야하는 상태라고 가정한다면 플랫폼의 주요 수입원이 될 수 있는 광고는 무작정 삭제하기 어렵다고 판단했습니다.
  - 그래서 고객이 직접 광고 빈도 수를 조절할 수 있도록 광고 줄이기 기능을 소극적으로 포함시켜 문제를 해결하였습니다.
