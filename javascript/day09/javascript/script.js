const posts = [
  {
    title: "example-1",
    content: "example-1",
  },
  {
    title: "example-2",
    content: "example-2",
  },
  {
    title: "example-3",
    content: "example-3",
  },
];

/*
 Task.1
 서버에서 받아온 데이터를 post-list 요소에 모두 보여줘야한다

 1-1) 서버에서 받아온 데이터 -> 요청 -> 배우지 않았어요
      mock data를 생성하여 마치 받아온 것처럼 연출

 1.2) post-list 요소에 자식 요소로 <article> 형태로 추가해야한다
 구글링 keyword -> 특정 요소에 자식 요소 추가

 post-list
 posts
 append, appendChild, insertBefore, insertAdjacentHTML (추가)
 순회




 */

// 순회하는 방법
// forEach, for of, map

const postListEl = document.querySelector("#post-list");
// innerText
// posts.forEach((el) => {
//   const articleEl = document.createElement("article");

// const titleEl = document.createElement('h6')
// const contentEl = document.createElement('p')

// titleEl.innerText = `<div>${el.title}</div`
// contentEl.innerText =  el.content

// articleEl.appendChild(titleEl)
// articleEl.appendChild(contentEl)

// innerHTML
//   articleEl.classList.add("post-item");

//   articleEl.innerHTML = `

//         <h6>${el.title}</h6>
//         <p>${el.content}</p>
//     `;

//   postListEl.appendChild(articleEl);
// });

// 문제 map으로 위의 코드를 동일한 동작을 하도록 구현하세요
// innerHTML, map, innerHTML = String

// map으로 구현
// postListEl.innerHTML = posts
//   .map((el) => {
//     return `<article class="post-item">
//         <h6>${el.title}</h6>
//         <p>${el.content}</p>
//       </article>`;
//   })
//   .join("");

// append, appendChild
// append("text", postListEl, "","","") // n개 추가가능, text/node 추가 가능

// appenChild(postListEl) // 1개만 가능, node만 가능, text error
// appenChild는 반환 값으로 추가한 node를 반환 (postListEl)

//   Task.2
//   입력받은 제목과 타이틀의 값을 서버에 요청을 보낸다

//   Task.3
//   요청이 성공 했으면 게시글 목록을 다시 불러와 post-list에 모두 보여준다
//   요청이 실패 했다면 실패했습니다 라는 error message 보여주기

// 1. button 요소에 eventListner의 click 타입을 부여
// 클릭하면, input 요소를 직접 selevt 해서 가지고 와야함

const button = document.querySelector(["[form=post-form]"]);
console.log(button);

// submit (form.addEvent)
// click, mouseover, mouseleave, dblclick (element.addEvent)
// load, resize, scroll (document.addEvent, element.addEvent)
// focus, blur, input, keydown, keyup, invalid (input.addEvent)

// button.addEventListener("click", (event) => {
//   event.preventDefault();
// submitEvent가 가진 기본 기능을 막는다
// action의 주소로 데이터를 전송하는 행위

// 예를 들어
// div.addEventListner('click')
// div -> p
// p 태그를 클릭하면 ---> 버블링

// event.target
// 실제로 누른 요소가 반환 >> p

// event.currentTarget
// 이벤트가 부여된 요소가 반환 >> div

//   const titleEl = document.querySelector("#title-input");
//   const textArea = document.querySelector("#content-area");

//   const articleEl = document.createElement("article");
//   articleEl.classList.add("post-item");
//   articleEl.innerHTML = `
//   <h6>${titleEl.value}</h6>
//   <p>${textArea.value}</p>
//     `;
//   postListEl.appendChild(articleEl);
//   titleEl.value = "";
//   textArea.value = "";

//   console.log(titleEl.value, textArea.value);
// });
// button.removeEventListener("click");
// eventListner 결국에 기다리는 것
// 메모리 차지 -> 혹시 해당 요소를 삭제해야하는 경우 remove도 삭제해야하는 경우
// remove도 시켜주어야 한다

// 2. form 요소에 eventListner의 submit 타입을 부여
// 해당 요소가 자동으로 Submit(Form) Event에 부여

const formEl = document.querySelector("#post-form");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.title, e.target.content);
  const articleEl = document.createElement("article");

  articleEl.classList.add("post-item");
  articleEl.innerHTML = `
  <h6>${e.target.title.value}</h6>
  <p>${e.target.content.value}</p>
    `;
  postListEl.appendChild(articleEl);
  titleEl.value = "";
  textArea.value = "";

  console.log(e.target.title.value, e.target.content.value);
  // form의 자식 요소에 있는 입력 요소의 name 속성으로 key
});

// 다음주
// 버블링, 캡쳐링
// 수정 삭제
// 이벤트 위임

// 일요일
// 토이 프로젝트 (게시판 만들기)
// 메뉴 스크롤 이벤트, 슬라이드 배너 이벤트

// axios, promise, fetch, class, prototype, this (보강)
// 프론트엔드 4과정 중 진행, 오전 대면 -> 오후 대면 강의장 이동
// 아니면 평일 밤 (비대면)
