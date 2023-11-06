### # 사전 준비

> nvm use

- 해당 node 버전이 설치되어 있지 않다면 설치

> npm i

### # backend

> npm run dev-api-server

- json 파일을 db처럼 약식으로 사용할 수 있는 json-server 사용

### # frontend

> npm run dev

- react-query
- axios
- react-hook-form
- tailwind

### # ssr 관련

#### 0. 결과물

- 브라우저 렌더링
  ![브라우저 렌더링](/render.png)
- ssr
  ![ssr](/ssr.png)

#### 1. app router vs page router

- app router 사용
- 레퍼런스가 많지 않고, 주변 개발자들의 후기가 좋지 않음
  - getServerSideProps등 널리 알려져 있는 NextJS 기본 사용법과 꽤 다름
  - 레퍼런스가 적어서 대응이 힘들고, 굳이 사용할 이유를 찾기 힘들다.

#### 2. 에러 처리

- 서버사이드에서 터지는 에러 대응 필요
  - 클라이언트쪽에서 터지는 런타임 에러보다 범위가 넓을 듯
- error boundary 등

#### 3. react-query 관련

- 가장 간단한 방법인 SuspenseQuery 사용
- 기타 아래 다른 방법들은 잘 되지 않았음
  - (initialData, 명시적인 hydrate 적용 등)
  - https://tanstack.com/query/v5/docs/react/guides/ssr

### # 궁금한 점

- 스타일도 ssr 시점에 적용되어야 하는지?
  - 봇이 긁어갈 정보만 있으면 될 것 같아서, 내 생각엔 필요 없을 것 같다.
  - ex) 쿠팡, 네이버 등 기타 사이트 참고
