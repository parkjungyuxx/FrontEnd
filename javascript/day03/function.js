let isEngine = false;
function engine() {
  isEngine = !isEngine;
}
function drive(km) {
  if (isEngine) {
    for (let i = km; i >= 0; i--) {
      if (i == 0) {
        console.log("주행완료!");
      } else {
        console.log(`${i}KM`);
      }
    }
  } else {
    console.log("시동이꺼져있습니다!");
  }
}
engine();
drive(10);

/**
 * 추가 변수나 함수는 얼마든지 추가해도 괜찮습니다
 * drive 함수는 이동거리를 km 단위로 정수로 전달
 * drive는 실행 시 해당 km가 1km 씩 줄어들어 0이되면 "주행완료"
 * 10km
 * 9km
 * ...
 * 1km
 * 주행완료
 *
 * 단, drive를 하기 위해서는 엔진이 켜져있어야하며 엔진이 꺼지면 주행할 수 없습니다
 * 이때, 엔진은 engine이라는 on off 할 수 있으며
 *
 * engine은 on일 때는 -> off, off일 때는 on이 됩니다
 * 그리고 반드시 모든 주행이 끝나면 engine은 off가 되어야합니다.
 *
 * 반복문, 제어문, 변수
 * */
