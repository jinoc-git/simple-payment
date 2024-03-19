# Simple Payments Project

| Front-End | [노진철](https://github.com/jinoc-git) |
| --------- | -------------------------------------- |

## 프로젝트 소개

shadcn/ui, Zod, React Hook Form, Supabase, toss payment를 사용하여 상품 결제 연습 프로젝트

<br />

배포 주소: https://simple-payment-tau.vercel.app/

## 프로젝트 route 구조

- / : 상품 리스트가 있는 메인 페이지
- /signin : 로그인 페이지
- /signup : 회원가입 페이지
- /admin : 상품 등록할 수 있는 관리자 페이지
- /productDetail/:productId : 상품 디테일 페이지
- /ordersheet : 상품을 결제하는 페이지
- /ordersheet/success : 상품을 결제 성공 페이지
- /ordersheet/fail : 상품을 결제 실패 페이지
- /auth/callback : 소셜 로그인의 callback 페이지

## 구현 기능

1. 로그인, 회원가입

- step에 따라 회원가입이 가능하도록 적절한 애니메이션 구현
- Zod를 사용하여 유효성 검사 구현
- Supabase의 auth를 사용하여 로그인, 회원가입 구현
- Supabase의 Oauth를 사용하여 구글 로그인 구현
- Next.js의 server action과 middleware를 사용하여 로그인 여부 확인
- api 함수 에러 시 toast 모달로 안내하는 기능 구현

2. 결제

- 배송 정보 수정 기능 구현
- 쿠폰 사용 기능 구현
- 포인트 사용 기능 구현
- 토스 payments의 SDK를 사용하여 결제 기능 구현

## 기술 스택

<div>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
	<img src="https://img.shields.io/badge/tailwindCss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/> <br />
  <img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
</div>
