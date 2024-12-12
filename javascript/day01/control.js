//if
let a = 5;

// 만역에 a가 5보다 크다면

// if[만약] ()[조건식] {}[코드블럭]
if (a > 5) {
  console.log("5보다 큼");
} else if (a === 5) {
  console.log("같소");
} else {
  console.log("작소");
}

// 코드에 분기가 생겼을 때
// 값에 따라 실행해야하는 코드가 다를 때
// 특정 경우 (예외 상황)에 내가 작성한 코드가 실행되면 안될 때

// switch
// 변수의 값에 따라 분기가 생길 때

let month = 2;
// switch(변수)
switch (month) {
  case 1: // case 1 (변수의 값이 1일 때)
    console.log("1월");
    break; // 종료문, 종료문이 없다면 해당 조건을 만족할 때까지 모두 실행
  case 2: 
    console.log("2월");
    break;
  default:
    console.log("월을 다시 입력해주세요");
}

/**
 * if와 switch 모두 분기가 나뉠 때 작성해야하는 문법
 * 단, 조건식을 사용해야 하는 경우 (ex -> ">","<") 반드시 if문
 * 그러나 값을 사용할 때는 if와 switch 모두 사용
 * 
 * 
 * // if (a === 5)``
 * // case 5 :
 * 
 * 보통은 if를 사용하지만 분기의 갯수가 많으면 switch를 사용하는 것이 가독성에 좋다
 */
