
----------

## fetch
- 자바스크립트 빌드인으로 내장
- 네트워크 통신을 위한 인터페이스
- 이전에는 XMLHttpRequest를 사용, 훨씬 더 강력한 기능 제공

### xml

```
<title>
</title>
```

### json

```json
  {
    "title":"타이틀"
  }
```

### usage

```js
  // return Promise
  //method: get

  // fetch("url")이 promise반환 하기에 then 사용, result.json()도 promise반환 하기에 then 사용
  fetch("url").then((result)=> result.json()).then((data)=>{
    console.log(data)
  })

  // get은 body 전송 불가
  // delete도 못 보냄
  fetch({
    url: "url",
    method: "get" | "post" | "put",
    body: JSON.stringfy({
        email: "email",
        password: "pwd"
    })
  })
```

## ajax

- 예전에 사용하던 네트워크 통신을 위한 인터페이스
- 더이상 사용되지 않습니다
- 다만, 전자정부프레임워크에 의해 구버전의 JS를 사용해야하는 경우 사용 가능성

> 전자정부프레임워크란? 정부산업에서 플랫폼별 표준화된 프레임워크를 말한다.

하나의 지정된 관리 방식을 지정해서 개발의 프레임워크의 버전에 따른 문제점을 방지

## axios

fetch를 더욱 간편하게 보내기 위한 인터페이스들로 구성된 라이브러리

```js
  axios.get("url)
  axios.post("url", data(json), option)
```

json -> string (x) <br/>
string -> json(x)

```js
  axios.get("url").then((data)=>{
    console.log("data")
  })
```

- 인스턴스 생성이 간편하고 용이 (기본값 설정)
- 인터셉터 API를 제공, 요청과 응답을 가로챌 수 있는 API 제공


ky > axios 경량화 버전 16베 감소




## method

## API
> Application Programming Interface

두 개의 애플리케이션을 연결해주는 인터페이스
(매커니즘)

웹에서 통신을 하려면 

브라우저 -> 서버(컴퓨터) -> 목적지(주소)

주소는 ip adress로 되어있음
(192.0.1.2) -> 도메인 네임 (별명) -> naver.com

https://www.backend.com

## Rest API

http를 통해서 요청하고 응답하는 것을 HttpRequest 
HttpResponse라고 한다.

이때 요청과 응답을 이름에 맞게 자원을 분류하고
정보를 안전하게 교환하기 위한 인터페이스

> RestFull API

https://www.backend.com/user

`user`사용자에 관한 정보<br/>
`method` 접근 방법 <br/>
- get : 사용자의 정보 조회
- post : 데이터를 생성, 데이터 보낼수 o
- put : 모든 정보를 한번에 수정, 데이터 보낼수 o 
- patch : 정보의 부분을 수정, 데이터 보낼수 o
- delete : 삭제

> 데이터를 보내지 않더라도 요청에 어떤 사용자의 정보를 요청하는지 확인해야할 필요가 있다

`query string(parameter)` <br/>
https://www.backend.com/user?userName=준규

`url parameter` <br/>
https://www.backend.com/user/준규


get은 보안에 불리, 조회 --> 멱등
post는 보안이 용이, 생성 --> 멱등하지 않다

멱등성 
> 동일 연산을 여러번 수행해도 결과 같음



## 백엔드 서버 주소


## RTK
> redux를 쉽게 사용하기 위한 라이브러리

- 망했음
- rtk가 나올 때 쯤 이미 recoil이나 더 사용성이 좋은 라이브러리 등장

```
npm install @reduxjs/toolkit
npm install react-redux
```

## MSW

## Thunk

## Vite

- vue 창시자에 의해 제작된 프로젝트 생성할 수 있는 프로젝트 템플릿
- 번틀링으로 Rollup을 사용 (Webpack x) - 배포할때
- 트랜스파일러로 swc도 지원
- vite 번틀러 로컬에서 서버를 실행 속도 월등 - 개발 생산성 (개발자 경함)

=> Vite = 프랑스어로 빠른

```
npm create vite@latest [project-name] -- --template react-swc
npm install
```

```
npm run dev
```