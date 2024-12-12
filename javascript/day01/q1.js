/**
 * 변수 이름
 * 변수, 수학, 과학, 영어, 탐구영역
 * 해당 변수에는 원하는 점수를 할당
 * 4가지의 평균 점수에 따라 아래와 같은 문장을 출력
 *
 * 만약 평균점수가 90점이 넘는다면
 * 000님의 학점은 A학점입니다
 *
 * 만약 평균점수가 80점이 넘는다면
 * 000님의 학점은 B학점입니다
 *
 * 만약 평균점수가 70점이 넘는다면
 * 000님의 학점은 C학점입니다
 *
 * 그외 나머지는
 * 000님의 학점은 F학점입니다
 *
 *
 * 경로 day01 -> node q1.js
 *
 */

let name = "박준규";
let math = 90;
let science = 80;
let english = 70;
let exp = 80;

let avg;
avg = (math + science + english + exp) / 4;

let grade;
if (avg > 90) {
  grade = "A";
} else if (avg > 80) {
  grade = "B";
} else if (avg > 70) {
  grade = "C";
} else {
  cgrade = "F";
}

console.log(`${name}님의 학점은 ${grade}학점 입니다.`);
