# 키워드 클릭 광고를 적용한 이커머스 플랫폼

## 배포 링크
> AWS S3, CloudFront, Route53 배포 / Github Actions CICD 구축 

- [🌐 구매자 페이지](https://adearth.shop)
- [🌐 어드민 페이지](https://adearth-admin.shop)

## 실행 방법
```
git clone https://github.com/ad-earth/client-v2.0.git

npm install
npm start
```

## 서비스 개요 
> 2023/02/28 ~  **v2.0 리팩토링 시작**
#### 프로젝트 주제
- 키워드 클릭 광고를 적용한 이커머스 플랫폼
#### 개발 목적
- 기존 키워드 클릭 광고주 페이지의 문제점들을 개선해 광고 입찰에 꼭 필요한 기능들만 선별하여 제공함으로써 사용자의 경험을 개선
- 편리하고 간편한 서비스를 광고주들에게 제공함으로써 신규 광고주 유입 효과 기대

## v2.0.0 주요 개선 사항
#### 기능적 개선
- 에러 및 알림 메시지를 공통 Toast UI로 처리하여 인터페이스의 일관성 유지
- Skeleton UI를 적용해 유저 반응성 향상
- 유저 편의성을 고려해 회원가입 시, 기본 프로필 이미지 제공
- React-router-dom의 ScrollRestoration 컴포넌트를 사용한 scroll top 처리로 사용성 개선
- 정렬과 페이지 처리를 query string으로 변경하여 뒤로 가기 시에도 유저가 선택한 필터가 유지되도록 개선

#### 기술적 개선
- 동일한 QueryKey로 받아온 데이터를 custom hook으로 모듈화해 데이터 관리와 유지보수가 용이하도록 개선
- 폴더 구조를 개선하고 컴포넌트를 모듈화하여 재사용성을 높임
- Axios Response Type을 미리 지정해 데이터 타입 사전 체크
- 유저 권한 속성을 추가한 라우터 정보를 목록화하고 선택적 렌더링을 적용해 유저 권한별 접근이 제어되는 웹으로 개선
- 이미지를 lazy loading 하고 압축률이 높은 이미지 형식(WebP)으로 변환하여 웹 성능을 최적화
- 상품 목록 정렬과 pagination의 페이지 처리를 state에서 query string으로 변경
- React Portal을 사용해 독립적인 Modal DOM 선언

## 페이지 주요 기능
| 회원가입 및 로그인 페이지 | 메인 페이지 |
|---|---|
|<img src="https://user-images.githubusercontent.com/105091138/231611197-778c05c4-ffc0-4099-b21e-861bcf7a8add.gif" width="400" />|<img src="https://user-images.githubusercontent.com/105091138/231608589-842124e8-0c00-4100-926e-70fad42525f4.gif" width="400"/>|
|▪︎ 아이디 & 비밀번호 & 연락처 중복검사, 실시간 유효성 검사 <br /> ▪︎ 아이디 & 비밀번호 찾기|▪︎ BEST 상품(누적 판매량 6위 이내의 6개 상품) 확인 <br /> ▪︎ NEW 상품(최신 등록 순 9개 상품) 확인|

| 상품 목록 페이지 | 광고 검색 목록 페이지 |
|---|---|
|<img src="https://user-images.githubusercontent.com/105091138/231609516-ad1f46ae-e9b5-4fd4-b7cd-1f77bafb7cba.gif" width="400" />|<img src="https://user-images.githubusercontent.com/105091138/232265920-aca2f3ce-4dcd-418f-9ff8-5a47a8ed165b.gif" width="400"/>|
|▪︎ 카테고리 별 상품 조회 <br /> ▪︎ 상품 목록 등록순, 인기순 정렬 <br /> ▪︎ 관심 상품 등록 |▪︎ 키워드 검색 시, 광고 키워드로 등록된 상품 확인 <br /> ▪︎ 광고 상품과 일반 상품을 구분하여 제공 <br /> ▪︎ 관심 상품 등록 |

| 상품 상세 페이지 | 장바구니 페이지 |
|---|---|
|<img src="https://user-images.githubusercontent.com/105091138/231612055-86e68d3a-7c1e-4a59-9ce3-dbbcf5c8a732.gif" width="400" />|<img src="https://user-images.githubusercontent.com/105091138/231612433-1660c955-10fe-4fba-a3ba-6cdb6657867f.gif" width="400"/>|
| ▪︎ 상품 상세 정보 제공 <br /> ▪︎ 관심 상품 등록  <br /> ▪︎ 구매평 확인 및 삭제|▪︎ 장바구니 상품과 옵션 정보 제공 <br /> ▪︎ 상품별 옵션과 수량 수정 및 삭제  <br /> ▪︎ 전체 & 선택 상품 구매 및 삭제|


| 결제 페이지 | 마이 페이지(주문 조회) |
|---|---|
|<img src="https://user-images.githubusercontent.com/105091138/231612934-9036cd3e-749b-44bf-bc23-8874ccfd9e85.gif" width="400" />|<img src="https://user-images.githubusercontent.com/105091138/231613382-c3bc49c9-290d-49e4-b65f-6bac2fc31fc0.gif" width="400"/>|
|▪︎ 결제 상품 정보 제공 <br /> ▪︎ 기본 정보(배송지, 이름, 연락처) 제공 <br /> ▪︎ 이전 배송지 목록 선택 & 신규 배송지 추가 |  ▪︎ 주문정보 리스트 무한스크롤 <br /> ▪︎ 주문정보 상세 내용 제공  | 

| 마이페이지(위시 리스트)  | 마이 페이지(취소 조회) |
|---|---|
|<img src="https://user-images.githubusercontent.com/105091138/231614054-bff7551b-041c-4431-a4d9-545c3fb481f0.gif" width="400" />|<img src="https://user-images.githubusercontent.com/105091138/231614032-d5718ac4-e047-483c-9742-d61dfda084ef.gif" width="400"/>|
|▪︎ 위시리스트 무한스크롤  <br /> ▪︎ 위시리스트 삭제 | ▪︎ 전체 & 선택 상품 주문취소 |

## 아키텍쳐 
![광고지구아키텍쳐](https://user-images.githubusercontent.com/105091138/195766564-08299428-e979-49f0-97c8-7a130a7b106c.jpeg)

## 기술 스택
- React, TypeScript
- React Query, Redux TK, Axios
- Styled-Components


## 기타
- [🤝 Convention](https://github.com/ad-earth/client-v2.0/issues/73)
- [🧩 IA](https://www.figma.com/file/0cxWFuPwV5h23dWp4idH5k/%EA%B5%AC%EB%A7%A4%EC%9E%90-IA?node-id=0%3A1)
- [📄 API](https://documenter.getpostman.com/view/18707207/2s7Z7ZnZDy)
