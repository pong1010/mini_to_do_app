리액트 포트폴리오

@프로젝트 아이디어 : "TypeScript로 만든 미니 투두& 노트앱"

@ 주요기능 (React + TypeScrit 활용)

React Router를 통한 페이지 이동
LocalStorage로 데이터 저장(DB 미사용 )
React Context API로 전역 상태 관리
Styled-Components 또는 SCSS로 스타일링
Vercel 또는 Netlify 로 배포

@사용기술 & 라이브러리

React(useState, useEffect, useContext 활용 )

useContext 를 사용한 파라미터 전달 ( props drilling 배제 ) - GlobalContext
react-router-dom 활용

BrowserRouter as Router, Routes, Route, useLocation, useNavigate
useLocation을 활용한 익스플로러 URL 입력을 통한 이동 방지
TypeScript (타입 안정성)
React Router(페이지 이동)
LocalStorage (로컬 데이터 저장)
Styled-Components or SCSS(스타일링)
Vercel/Netlify(배포)
React 템플릿 SideVar TypeScript적용코드로 수정

@이 프로젝트로 어필할 수 있는점

React + TypeScript 를 활용한 강력한 타입 안정성
Vercel/Netlify로 배포한 실제 동작하는 웹 애플리케이션
React Router 와 Context API를 이용한 고급 상태 관리 및 페이지 라우팅

─

기본파일구조설정
src/
├──components /
│ ├──AddTodo.tsx
│ ├──TodoList.tsx
├──pages/
│ ├──Home.tsx
│ ├──Login.tsx
│ ├──Signup.tsx
├──App.tsx
├──index.tsx
└──styles/
└──GlobalStyles.ts

React앱 생성
TypeScript 템플릿 사용 : TypeScript를 사용하는 React 앱 생성
npx create-react-app ./ --template typescript

npx create-react-app ./ --template typescript

필수라이브러리 설치하기 ( React Router , Styled-Components )
cd mini-todo-app
npm install react-router-dom axios styled-components @types/styled-components
CSS Styled Components 로 글로벌 스타일 적용.
styled-components , @types/styled-components 설칠
npm install styled-components
npm install @types/styled-components

npm install @fortawesome/fontawesome-free bootstrap react-bootstrap
npm install bootstrap
    
npm install react-bootstrap

import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

로그인화면 만들기.
