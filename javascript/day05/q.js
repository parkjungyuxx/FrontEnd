/**
 *
 * 자판기가 존재합니다.
 * 해당 자판기는 동전을 넣고 원하는 음료수 명을 선택할 수 있습니다.
 *
 * 메뉴는 아래와 같습니다
 * "솔의 눈" = 300원
 * "비타500" = 500원
 * "콜라" -> 1000원
 *
 * 만약 없는 메뉴를 선택하면 "존재하지 않는 메뉴입니다" 출력
 * 넣은 동전보다 가격이 더 높다면 "요금이 부족합니다. 잔돈 1000원" 출력
 * 넣은 동전 보다 가격이 싸다면 "콜라, 잔돈 500원" 출력
 * 만약 값이 같다면 "콜라" 출력
 *
 * ex) 자판기(1000,콜라) -> 콜라
 */

let vendingM = (menu, money) => {
  const drinks = {
    솔의눈: 300,
    비타500: 500,
    콜라: 1000,
  };

  let result;
  console.log(Object.keys(drinks).indexOf(menu));

  if (!Object.keys(drinks).indexOf("menu"))
    return console.log("존재하지 않는 메뉴입니다");

  if (drinks[menu] > money) result = `요금이 부족합니다. ${price}원 반환`;
  else if (drinks[menu] < money)
    result = `${menu}, 잔돈 ${money - drinks[menu]}원 `;
  else result = menu;

  console.log(result);
};

vendingM("솔의눈", 400);
