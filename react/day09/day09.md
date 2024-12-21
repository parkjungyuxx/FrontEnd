---
Theme
---

디자인 토큰을 지정해서 변수화

styles
colors
typography
theme ---> export const theme = {colors, typography}

```js
const theme = {
    colors: {
        brand:
        primary:
        secondary:
        blue: {
            100: '#ffffff'
            200:
            300:

        }
    }
}
```

`app.js`
`index.js`

```
<ThemeProvider theme = {theme}>
    <App />
</ThemeProvider>
```

### Usage

1. Styled Component

```js
styled.div`
  color: ${(props) => props.theme.color.blue[100]};
`;
```

2. css

```js
css = {(theme)=>theme.color.blue[100]}
```

3. in Component

```js
const Component = () => {
  const t = useTheme();
  t.color.blue[100];
};
```

### 폴더구조

> 폴더구조는 따로 정해져있는게 없습니다 -> 약속

#### 1. 훅함수 구조

```
src
    app (optional)
    libs
        다른 외부 라이브러리에 대한 config
    components (required)
        공용으로 사용되는 컴포넌트
        common
          모든 페이지에서 전역적
        loginPage
          로그인 페이지에서만 사용
        detailPage

    apis
    hooks (required)
    utils
    types
    styles

    (layer)
        (slice)
            (segment)

```

#### 2. 도메인/모듈 기반의 폴더 구조

```
    shared (공용)
    domains (특정 분야)
        user
            hooks
            components
        auth
        todo
    core (핵심 플로우)
        libs
    utils
    pages

```

#### 3. 아토믹 디자인 폴더 구조

```
    atoms (원자)
        Button
        Input
    molecules (분자)
        SearchBar
    organisms (유기체)
        Nav
    template (템플릿)
        Header
        Layout
    pages (페이지)
        Page

```

## Promise

### promise

    특정한 함수가 종료되었을 때 실행해야하는 약속을 정하는 함수

```js
new Promise((resolve, reject) => {
  // 기능
  // 성공했으면 resolve
  // 실패했으면 reject
  // 성공하거나 실패할 수 있는 함수
  // 특정 함수 이후에 반드시 실행되어야하는 함수
  // 특정 함수가 시간이 걸리는 일
});
```

일반적으로 Promise를 사용하는 일이 많지는 않지만
(데이터 패칭 제외) 아래와 같은 형태로 사용 될 수 있다

```js
const delay = (ms) => new Promise((resolve) => setTimeOut(() => resolve, ms));

await delay(3000);
console.log('delay')
```

### resolve
> resolve는 promise가 성공했을 때 이후의 함수로 넘기는 함수입니다.

```js
  new Promise((resolve) => {
    resolve("성공")
  }).then((data) => {
    console.log(data) // 성공
  })
```

### reject
> reject는 promise가 실패했을 때 이후의 함수로 넘기는 함수입니다.

```js
  new Promise((_rs, resolve) => {
    // resolve -> x
    // 안쓰는 변수를 순서 때문에 넣어야한다면 _포함
    reject("실패")
  }).then((data) => {
    console.log(data) // 성공
  }).catch((error) => {
    console.log(err) // 실패
  })

```

promise는 비동기x
then catch는 비동기

=> 성공 실패에 따라 다음 함수 처리할거 지정, promise (다음에 할 일)

### 이벤트 루프 

자바스크립트는 싱글 스레드
일꾼이 하나기 때문에 두가지 일을 동시 수행하는 것이 불가능

```
3초 (a-1)
4초 (a-2)
10초 (b)
3초 (a-3)
```

동시적으로 일을 다발성을 처리
=> 비동기(순차적이지 않다) 함수 => b
=> 비동기 함수는 브라우저의 WebAPIs에 의해 실행

```JavaScript``` <br/>
엔진
a-1, a-2, a-3

```WebAPIs``` <br/>
b

문제가 발생해요

```이벤트 루프```


WebAPIs는 동시에 실행되기 때문에 b-1 -> b-2 (x)

이벤트 루프는 WebAPIs에서 실행되는 비동기 함수가
종료되고 나서 실행되는 함수를 callback queue에 해당 값을 저장

그리고 WebAPIs에서 비동기 함수가 종료되면 call stack이 비워져있으면
저장된 값을 정해진 순서에 따라 실행

<hr/>

### Stack

LIFO <br/>
마지막에 들어온 데이터가 가장 먼저 삭제

```
function c() {

}
function b() {
    c()
}

function a() {
    b()
}
// 가장 빨리 지워져야하는건 c

(c => x)  ---> 가장 먼저 삭제
b
a
```
### Queue
FIFO <br/>
가장 먼저 들어온 데이터가 가장 먼저 나간다 -> 순서

```
c
b
a --->

```

| 이벤트 루프의 가장 중요한건 왜 자바스크립트는 이벤트 루프를 만들게 되었나

1. 싱글 스레드 이기 때문에 동시에 일할 수 있는 일꾼이 필요
2. 동시에 실행하는 업무가 종료되고 나서 실행하는 함수를 저장할 공간 (callbackqueue)
3. 현재 일하는 중이 아니라면 callbackqueue에 저장된 함수를 실행시켜줄 트리거 (event loop)

<br/>

> 10초면 끝낼 수 있는 일을 20초 동안 하면 효율적, "비효율적"

<br/>

비동기 함수의 종류

 - process..nextTick()
 - * Promise Callback (then, catch)
 - * async function
 - queueMicrotask
 - * setTimeout()
 - * setInterval()
 - dataFetching -> 반환 타입이 Promise 그래서 따로 구분하지 않음

 <hr/>
 <hr/>

 ### Promise.all
여러개의 promise를 함께 실행, 단 하나라도 실패하면 모두 실패한 것을 간주

```js
const Promise1 = new Promise()

Promise.all([Promise1, Promise2, Promise3]).then()
.catch()
```

### Promise.allSettled
여러개의 promise 함께 실행하는데, 실패와 성공을 함께 확인 가능


```js
Promise.allSettled([Promise1, Promise2, Promise3]).then()

/**
 [
   { status: 'fulfilled', value: data},
   { status: 'rejected', value: data}
 ]
*/
```

 `Promise.race([])`
 > 여러개의 Promise 중 가장 빨리 끝나는 Promise

 ### async / await

Promise가 여러번 중첩되어 실행했을 때 가독성이 나빠지는 문제를 쉽게 해결

```js
  new Promise(). then ((result) =>
    return new Promise(result).then(result =>
    result)
    ).then()
```

1. async는 반드시 함수형으로 사용되어야 한다.

```js
const 
  

  function executePromises() {
    // Promise의 then이 반환하는 값이 result
    const result = await new Promise(Promise1)
    // 기다림
    const result2 = await new Promise((resolve) ->
    {
        console.log(result)
        resolve(result + 1)
    })

    new Promise().then((result)=>
      return new Promise(result).then(result =>
        result)
      )then.()
  }

  async function executePromises() {
    new Promise().then((result)=>
      return new Promise(result).then(result =>
        result)
      )then.()
  }

  executePromises()

```

> Promise 코드가 중첩되어도 코드를 동기적으로 읽을 수 있다는 장점

<hr/>

### 예외처리 (reject)

```js

try{
    // await
    // await
} catch(err){
        // ---- reject가 반환하는 값
        console.log(err)
}
```

```js
Promise().catch((err) => {

}) // 예외 처리 <br/>
try { 
    await Promise() 
}   catch (err) {
    // 에러메세지를 보여주거나 알림을 보여줘야할 때
    console.log(err) // 콘솔 찍으려고 캐치 사용 절대 XXXXXX
    // 안해도 최상단에서 출력해줌
    // 출력할거면 catch 하지 마세요
    // 전역으로 에러를 다루는 공간으로 안 넘어가요
    throw err // throw 해야 넘어감 (글로벌로)
    // 내가 해결 못하겟으니 윗 사람이 해결하소
} 
```

위지윅 에디터
토스트
메타 - 렉시컬 