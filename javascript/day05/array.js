const arr = [];
arr[3] = 1;

console.log(arr);
console.log(arr.length); // 4

/**
 * 배열에 요소를 추가
 */

arr[4] = 2;
console.log(arr); //[ <3 empty items>, 1, 2 ]
arr.push(3); // 마지막 인덱스에 요소를 추가
console.log(arr); // [ <3 empty items>, 1, 2, 3 ]
arr.unshift(0); // 맨 앞 안덱스에 요소를 추가
console.log(arr); // [ 0, <3 empty items>, 1, 2, 3 ]

/**
 * 배열 요소 삭제
 * 객체에서도 원하는 키값을 입력하면 삭제 Delete jungyu["age"]
 */
delete arr[0];
console.log(arr); // empty item으로 변경
// 순서도 남기지 않고 제거
arr.pop(); // 마지막 요소를 삭제
console.log(arr);
const el = arr.pop(); //제거한 요소를 반환
console.log(el);

arr.shift();
console.log(arr);

/**
 * indexof
 * includes
 * join
 * concat
 * reverse
 * splice
 * slice
 * map
 * filter
 * sort
 * find
 * every
 * some
 * fineIndex
 * reduce
 * flat
 * flatMap
 */

/**
 * indexOf: 배열에서 특정 요소의 첫 번째 인덱스를 반환. 없으면 -1 반환.
 * includes: 배열에 특정 요소가 포함되어 있는지 여부를 true 또는 false로 반환.
 * join: 배열 요소들을 하나의 문자열로 합침. 원하는 구분자를 사용할 수 있음.
 * concat: 배열을 다른 배열이나 값과 합쳐 새로운 배열을 반환.
 * reverse: 배열의 순서를 반대로 뒤집음
 * splice: 배열에서 요소를 추가, 제거 또는 교체하여 변경된 배열 반환
 * slice: 배열의 일부를 선택해 새로운 배열을 반환. 원본 배열은 유지됨
 * map: 배열의 각 요소에 함수를 적용해 새로운 배열을 반환
 * filter: 조건을 만족하는 요소들만 모아 새로운 배열을 반환
 * sort: 배열을 특정 기준에 따라 정렬. 기본적으로 사전순 정렬
 * find: 조건을 만족하는 첫 번째 요소를 반환. 없으면 undefined 반환
 * every: 배열의 모든 요소가 조건을 만족하면 true, 하나라도 아니면 false 반환
 * some: 배열의 하나 이상의 요소가 조건을 만족하면 true 반환
 * findIndex: 조건을 만족하는 첫 번째 요소의 인덱스를 반환. 없으면 -1
 * reduce: 배열 요소들을 하나의 값으로 축소. 예: 합계 계산
 * flat: 다차원 배열을 하나의 차원으로 평탄화
 * flatMap: map 후 평탄화. 각 요소에 함수 적용 후 한 차원 낮춤.
 */



//  1. indexOf: 배열에서 특정 요소의 첫 번째 인덱스를 찾습니다.
// const arr1 = [1, 2, 3, 2];
// console.log(arr1.indexOf(2)); // 1

//  2. includes: 배열에 특정 요소가 포함되어 있는지 확인합니다.
// const arr2 = [1, 2, 3];
// console.log(arr2.includes(2)); // true

//  3. join: 배열 요소들을 하나의 문자열로 합칩니다.
// const arr3 = ["Hello", "world"];
// console.log(arr3.join(" ")); // "Hello world"

//  4. concat: 배열을 다른 배열이나 값과 합칩니다.
// const arr4_1 = [1, 2];
// const arr4_2 = [3, 4];
// console.log(arr4_1.concat(arr4_2)); // [1, 2, 3, 4]

//  5. reverse: 배열의 순서를 반대로 뒤집습니다.
// const arr5 = [1, 2, 3];
// console.log(arr5.reverse()); // [3, 2, 1]

//  6. splice: 배열에서 요소를 추가, 제거, 교체합니다.
// const arr6 = [1, 2, 3, 4];
// arr6.splice(1, 2, 10, 20); // 인덱스 1부터 2개 제거하고 10, 20 추가
// console.log(arr6); // [1, 10, 20, 4]

//  7. slice: 배열의 일부를 선택해 새로운 배열을 반환합니다.
// const arr7 = [1, 2, 3, 4];
// console.log(arr7.slice(1, 3)); // [2, 3]

//  8. map: 배열의 각 요소에 함수를 적용해 새로운 배열을 반환합니다.
// const arr8 = [1, 2, 3];
// console.log(arr8.map(x => x * 2)); // [2, 4, 6]

//  9. filter: 조건을 만족하는 요소들만 모아 새로운 배열을 반환합니다.
// const arr9 = [1, 2, 3, 4];
// console.log(arr9.filter(x => x > 2)); // [3, 4]

//  10. sort: 배열을 특정 기준에 따라 정렬합니다.
// const arr10 = [3, 1, 4, 2];
// console.log(arr10.sort()); // [1, 2, 3, 4]

//  11. find: 조건을 만족하는 첫 번째 요소를 반환합니다.
// const arr11 = [1, 2, 3, 4];
// console.log(arr11.find(x => x > 2)); // 3

//  12. every: 모든 요소가 조건을 만족하면 true 반환, 하나라도 아니면 false.
// const arr12 = [2, 4, 6];
// console.log(arr12.every(x => x % 2 === 0)); // true

//  13. some: 하나 이상의 요소가 조건을 만족하면 true.
// const arr13 = [1, 3, 5, 6];
// console.log(arr13.some(x => x % 2 === 0)); // true

//  14. findIndex: 조건을 만족하는 첫 번째 요소의 인덱스를 반환합니다.
// const arr14 = [1, 2, 3, 4];
// console.log(arr14.findIndex(x => x > 2)); // 2

//  15. reduce: 배열 요소들을 하나의 값으로 축소합니다.
// const arr15 = [1, 2, 3, 4];
// console.log(arr15.reduce((acc, curr) => acc + curr, 0)); // 10

//  16. flat: 다차원 배열을 하나의 차원으로 평탄화합니다.
// const arr16 = [1, [2, 3], [4, [5]]];
// console.log(arr16.flat(2)); // [1, 2, 3, 4, 5]

//  17. flatMap: map 후 평탄화합니다.
// const arr17 = [1, 2, 3];
// console.log(arr17.flat   Map(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]
